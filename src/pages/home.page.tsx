import { useRef } from 'react'

import { Button } from '@/components/atoms/Button'
import { Modal, type ModalRef } from '@/components/atoms/Modal'

const Home = () => {
  console.log('Parent')
  const modalRef = useRef<ModalRef>(null)

  return (
    <div className='size-full'>
      <Modal
        ref={modalRef}
        title='Modal Title'
        onBeforeClose={() => {
          // timeout 10s
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(true)
            }, 10000)
          })
        }}
      >
        <div>Modal Content</div>
      </Modal>
      <Button onClick={() => modalRef.current?.open()}>Open Modal</Button>
    </div>
  )
}

export default Home
