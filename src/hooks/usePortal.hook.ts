import { type FC, type ReactNode, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'

// Constants
const DEFAULT_Z_INDEX = '1000'
const PORTAL_ESC_EVENT = 'portal:esc'
const ESCAPE_KEY = 'Escape'
const ARIA_HIDDEN_TRUE = 'true'
const ARIA_HIDDEN_FALSE = 'false'
const HIDDEN_OVERFLOW = 'hidden'

interface UsePortalOptions {
  id?: string
  root?: HTMLElement | null
  closeOnEsc?: boolean
  lockScroll?: boolean
  ariaHideSiblings?: boolean
}

interface PortalProps {
  children: ReactNode
}

interface UsePortalReturn {
  Portal: FC<PortalProps>
  container: HTMLDivElement | null
}

const isServerSide = (): boolean => typeof document === 'undefined'

const createPortalContainer = (id?: string): HTMLDivElement | null => {
  if (isServerSide()) return null

  const element = document.createElement('div')
  if (id) element.id = id
  element.style.position = 'relative'
  element.style.zIndex = DEFAULT_Z_INDEX

  return element
}

const handleScrollLock = (shouldLock: boolean): string => {
  const previousOverflow = document.body.style.overflow
  if (shouldLock) {
    document.body.style.overflow = HIDDEN_OVERFLOW
  }
  return previousOverflow
}

const restoreScrollLock = (previousOverflow: string): void => {
  document.body.style.overflow = previousOverflow
}

const hideAriaElements = (
  container: HTMLElement,
  root: HTMLElement,
): HTMLElement[] => {
  const hiddenElements: HTMLElement[] = []

  if (root !== document.body) return hiddenElements

  const siblings = Array.from(document.body.children) as HTMLElement[]
  siblings.forEach((element) => {
    const isNotContainer = element !== container
    const isNotAlreadyHidden =
      element.getAttribute('aria-hidden') !== ARIA_HIDDEN_TRUE

    if (isNotContainer && isNotAlreadyHidden) {
      element.setAttribute('aria-hidden', ARIA_HIDDEN_TRUE)
      hiddenElements.push(element)
    }
  })

  return hiddenElements
}

const restoreAriaElements = (hiddenElements: HTMLElement[]): void => {
  hiddenElements.forEach((element) => {
    element.setAttribute('aria-hidden', ARIA_HIDDEN_FALSE)
  })
}

const createEscapeKeyHandler =
  (container: HTMLElement) =>
  (event: KeyboardEvent): void => {
    if (event.key === ESCAPE_KEY) {
      container.dispatchEvent(new CustomEvent(PORTAL_ESC_EVENT))
    }
  }

export function usePortal(options: UsePortalOptions = {}): UsePortalReturn {
  const {
    id,
    root = isServerSide() ? null : document.body,
    closeOnEsc = false,
    lockScroll = false,
    ariaHideSiblings = false,
  } = options

  const [isMounted, setIsMounted] = useState(false)

  const container = useMemo(() => createPortalContainer(id), [id])

  useEffect(() => {
    if (!root || !container) return

    root.appendChild(container)
    setIsMounted(true)

    const previousOverflow = handleScrollLock(lockScroll)

    const hiddenElements = ariaHideSiblings
      ? hideAriaElements(container, root)
      : []

    const escapeKeyHandler = closeOnEsc
      ? createEscapeKeyHandler(container)
      : null

    if (escapeKeyHandler) {
      window.addEventListener('keydown', escapeKeyHandler)
    }

    return () => {
      restoreScrollLock(previousOverflow)
      restoreAriaElements(hiddenElements)

      if (escapeKeyHandler) {
        window.removeEventListener('keydown', escapeKeyHandler)
      }

      root.removeChild(container)
    }
  }, [root, container, lockScroll, closeOnEsc, ariaHideSiblings])

  const Portal: FC<PortalProps> = ({ children }) => {
    if (!isMounted || !container) return null
    return createPortal(children, container)
  }

  return { Portal, container }
}
