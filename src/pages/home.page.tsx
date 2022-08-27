import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import '../assets/css/pages/home.css'
import reactLogo from '../assets/images/react.svg'
import {
  useCreateTodoMutation,
  useGetListTodosQuery
} from '../sockets/todos.socket'

// const socket = io('http://localhost:3000/v1/todos')
// socket.auth = {
//   token:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNjYxMTUyNDUwLCJleHAiOjE2NjM3NDQ0NTB9.kzP41-rp6W6ViZop5gwgfuSRSLD2HuLyo9l8ZOA16MY1'
// }

const Home = () => {
  const { t } = useTranslation()
  const [count, setCount] = useState(0)

  const { data: listTodos } = useGetListTodosQuery()
  console.log('🚀 ~ file: home.page.tsx ~ listTodos', listTodos)

  const [createTodo, { error }] = useCreateTodoMutation()
  console.log('🚀 ~ file: home.page.tsx ~ error', error)

  return (
    <div className='Home'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{t('welcome')}</h2>
      <div className='card'>
        <button
          onClick={() => {
            setCount((count) => count + 1)
            createTodo({ id: count })
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/home.page.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Home
