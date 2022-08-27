import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { io, Socket } from 'socket.io-client'
import config from '../config'
import { setLogout } from '../store/auth/auth.slice'

interface ICommonResponse {
  data: any
  error: {
    type: string
    description: string
  }
}

type ISocketData = any

interface ISocketError {
  type: string
  description: string
}

const { ENV_ENDPOINT_SOCKET } = import.meta.env

const listSocketClient: { [key: string]: SocketClient } = {}

export interface ISocketClient {
  socket: Socket
  events: string[]

  emit(event: string, arg: any): Promise<ISocketData>

  on(
    event: string,
    callback: (data: ISocketData, error?: ISocketError) => void
  ): void

  off(event: string): void

  offAll(): void

  disconnect(): void
}

export class SocketClient implements ISocketClient {
  socket: Socket
  events: string[]

  constructor(endpoint: string) {
    this.events = []

    if (endpoint[0] === '/') endpoint = endpoint.substring(1)

    this.socket = io(ENV_ENDPOINT_SOCKET + '/' + endpoint, {
      withCredentials: true,
      auth: {
        token: Cookies.get('token')
      }
    })
  }

  emit(event: string, arg: any) {
    return new Promise<ISocketData>((resolve, reject) => {
      this.socket.emit(event, arg, (response: ICommonResponse) => {
        if (response.data) return resolve(response.data)

        reject(response.error)
      })
    })
  }

  on(
    event: string,
    callback: (data: ISocketData, error?: ISocketError) => void
  ) {
    this.events.push(event)

    this.socket.on(event, (response: ICommonResponse) => {
      if (response.data) callback(response.data)
      else callback(null, response.error)
    })
  }

  off(event: string) {
    if (this.events.includes(event)) {
      this.socket.off(event)
      this.events.splice(this.events.indexOf(event), 1)
    }
  }

  offAll() {
    this.events.forEach((event: string) => {
      this.socket.off(event)
    })
  }

  disconnect() {
    this.socket.disconnect()
  }
}

export const handleConnectError = (
  socketClient: SocketClient,
  dispatch: ThunkDispatch<any, any, AnyAction>
): Promise<Error> => {
  return new Promise<Error>((resolve) => {
    socketClient.socket.on('connect_error', (error) => {
      if (
        ['TOKEN_NOT_FOUND', 'TOKEN_EXPIRED', 'TOKEN_INVALID'].includes(
          error.message
        )
      ) {
        socketClient.disconnect()
        dispatch(setLogout())
        window.location.href = config.loginPath
      } else resolve(error)
    })
  })
}

export default function fetchSocketClient(endpoint: string): ISocketClient {
  let socketClient = listSocketClient[endpoint]

  if (!socketClient) {
    socketClient = new SocketClient(endpoint)

    listSocketClient[endpoint] = socketClient

    socketClient.socket.on('disconnect', () => {
      delete listSocketClient[endpoint]
    })
  }

  return socketClient
}
