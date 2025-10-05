import {
  type FC,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  type RefObject,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { usePortal } from '@/hooks/usePortal.hook'

import { cn } from '@/lib/utils'

// TypeScript interfaces
export interface ModalProps {
  title?: string
  onBeforeClose?: () => Promise<boolean> | boolean
  preventBackdropClose?: boolean
  children?: ReactNode
  className?: string
}

export interface ModalRef {
  open: (data?: unknown) => void
  close: () => Promise<boolean>
  isOpen: () => boolean
  setLoading: (loading: boolean) => void
  getContentRef: () => HTMLDivElement | null
}

const Modal: FC<ModalProps & { ref: RefObject<ModalRef | null> }> = ({
  title,
  onBeforeClose,
  preventBackdropClose = false,
  children,
  className,
  ref,
}) => {
  console.log('Child')
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const { Portal } = usePortal()

  const closeModal = useCallback(async (): Promise<boolean> => {
    if (onBeforeClose) {
      setIsLoading(true)
      const canClose = await onBeforeClose()
      setIsLoading(false)
      if (!canClose) return false
    }
    setIsOpen(false)
    return true
  }, [onBeforeClose])

  useImperativeHandle(
    ref,
    () => ({
      open: (data?: unknown) => {
        setIsOpen(true)
        // Có thể mở rộng để truyền data cho content
        if (data) {
          // Handle data if needed
        }
      },
      close: closeModal,
      isOpen: (): boolean => isOpen,
      setLoading: (loading: boolean) => setIsLoading(loading),
      getContentRef: () => contentRef.current,
    }),
    [closeModal, isOpen],
  )

  const handleBackdropClick = async (e: MouseEvent) => {
    if (
      e.target === e.currentTarget &&
      !preventBackdropClose &&
      !isLoading &&
      isOpen
    ) {
      await closeModal()
    }
  }

  const handleEscapeKey = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape' && isOpen && !preventBackdropClose && !isLoading) {
        closeModal()
      }
    },
    [isOpen, preventBackdropClose, closeModal, isLoading],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener(
        'keydown',
        handleEscapeKey as unknown as EventListener,
      )
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener(
        'keydown',
        handleEscapeKey as unknown as EventListener,
      )
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener(
        'keydown',
        handleEscapeKey as unknown as EventListener,
      )
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleEscapeKey])

  if (!isOpen) return null
  return (
    <Portal>
      <div
        className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
        onClick={handleBackdropClick}
        onKeyDown={handleEscapeKey}
        role='button'
        aria-label='modal'
        tabIndex={0}
      >
        <div
          className={cn(
            'relative mx-4 w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg',
            'duration-300 animate-in fade-in-0 zoom-in-95',
            isLoading && 'pointer-events-none opacity-50',
            className,
          )}
          // onClick={(e) => e.stopPropagation()}
          // onKeyDown={(e) => e.stopPropagation()}
          role='dialog'
        >
          {/* Header */}
          {title && (
            <div className='mb-4 flex items-center justify-between'>
              <h2 id='modal-title' className='text-lg font-semibold'>
                {title}
              </h2>
              {!preventBackdropClose && (
                <button
                  type='button'
                  className='rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none'
                  onClick={closeModal}
                  disabled={isLoading}
                >
                  <svg
                    className='h-4 w-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                  <span className='sr-only'>Đóng</span>
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div ref={contentRef} className='space-y-4'>
            {children}
          </div>

          {/* Loading overlay */}
          {isLoading && (
            <div className='absolute inset-0 flex items-center justify-center rounded-lg bg-background/50'>
              <div className='h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent' />
            </div>
          )}
        </div>
      </div>
    </Portal>
  )
}

export { Modal }
