import { ReactNode, useEffect, useRef } from 'react'

interface Props {
  children: ReactNode
  onBottom: () => void
}

function isBottom(ref: React.RefObject<HTMLDivElement>) {
  if (!ref.current) {
    return false
  }
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight
}

export function InfiniteScroll({ children, onBottom }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (isBottom(wrapRef)) {
        onBottom()
      }
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [onBottom])

  return <div ref={wrapRef}>{children}</div>
}
