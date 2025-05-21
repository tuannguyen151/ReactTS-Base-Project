import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { Socket, io } from 'socket.io-client'

import config from '../config'
import { setLogout } from '../store/auth/auth.slice'

interface CommonResponse {
  data: unknown
  error: {
    type: string
    description: string
  }
}

type SocketDataType = unknown

interface SocketError {
  type: string
  description: string
}

const { ENV_ENDPOINT_SOCKET } = import.meta.env

const listSocketClient: { [key: string]: SocketClient } = {}

interface SocketClientInterface {
  socket: Socket
  events: string[]

  emit(event: string, arg: unknown): Promise<SocketDataType>

  on(
    event: string,
    callback: (data: SocketDataType, error?: SocketError) => void,
  ): void

  off(event: string): void

  offAll(): void

  disconnect(): void
}

export class SocketClient implements SocketClientInterface {
  socket: Socket
  events: string[]

  constructor(endpoint: string) {
    this.events = []

    if (endpoint.startsWith('/')) endpoint = endpoint.substring(1)

    this.socket = io(ENV_ENDPOINT_SOCKET + '/' + endpoint, {
      withCredentials: true,
      auth: {
        token: Cookies.get('token'),
      },
    })
  }

  emit(event: string, arg: unknown) {
    return new Promise<SocketDataType>((resolve, reject) => {
      this.socket.emit(event, arg, (response: CommonResponse) => {
        if (response.data) return resolve(response.data)

        reject(response.error)
      })
    })
  }

  on(
    event: string,
    callback: (data: SocketDataType, error?: SocketError) => void,
  ) {
    this.events.push(event)

    this.socket.on(event, (response: CommonResponse) => {
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
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
): Promise<Error> => {
  return new Promise<Error>((resolve) => {
    socketClient.socket.on('connect_error', (error) => {
      if (
        ['TOKEN_NOT_FOUND', 'TOKEN_EXPIRED', 'TOKEN_INVALID'].includes(
          error.message,
        )
      ) {
        socketClient.disconnect()
        dispatch(setLogout())
        window.location.href = config.loginPath
      } else resolve(error)
    })
  })
}

export default function fetchSocketClient(
  endpoint: string,
): SocketClientInterface {
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
