import { createApi } from '@reduxjs/toolkit/query/react'
import fetchSocketClient, { handleConnectError } from './base'

enum eventEnum {
  list = 'todos:list',
  create = 'todos:create',
  created = 'todos:created'
}

interface ITodo {
  id: number
}

export const todosSocket = createApi({
  reducerPath: 'todosSocket',
  baseQuery: () => ({ data: [] as ITodo[] }),
  tagTypes: ['todos'],
  endpoints: (builder) => ({
    getListTodos: builder.query<ITodo[], void>({
      query: () => 'todos',
      async onCacheEntryAdded(
        arg,
        { cacheDataLoaded, cacheEntryRemoved, updateCachedData, dispatch }
      ) {
        const socketClient = fetchSocketClient('todos')
        handleConnectError(socketClient, dispatch)

        try {
          await cacheDataLoaded

          socketClient.on(eventEnum.list, (todos: ITodo[]) => {
            updateCachedData(() => todos)
          })

          socketClient.on(eventEnum.created, (todo: ITodo) => {
            updateCachedData((data) => {
              data.push(todo)
            })
          })
        } catch {
          // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
          // in which case `cacheDataLoaded` will throw
        }

        await cacheEntryRemoved

        socketClient.disconnect()
      }
    }),

    createTodo: builder.mutation<ITodo, { id: number }>({
      async queryFn({ id }: { id: number }) {
        const socketClient = fetchSocketClient('todos')

        try {
          const data: ITodo = await socketClient.emit(eventEnum.create, { id })

          return { data }
        } catch (error) {
          return { error }
        }
      }
    })
  })
})

export const { useGetListTodosQuery, useCreateTodoMutation } = todosSocket
