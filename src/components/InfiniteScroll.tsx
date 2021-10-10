import { ReactNode, useEffect, useRef, useState } from 'react'

interface Props {
  children: ReactNode
  onBottom: () => void
  isLoading: boolean
}

function isBottom(ref: React.RefObject<HTMLDivElement>) {
  if (!ref.current) {
    return false
  }
  return ref.current.getBoundingClientRect().bottom === window.innerHeight
}

export function InfiniteScroll({ children, onBottom, isLoading }: Props) {
  const [initialLoad, setInitialLoad] = useState(true)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (initialLoad) {
      onBottom()
      setInitialLoad(false)
    }
  }, [initialLoad, onBottom, setInitialLoad])

  useEffect(() => {
    const onScroll = () => {
      if (!isLoading && isBottom(wrapRef)) {
        onBottom()
      }
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [onBottom, isLoading])

  return <div ref={wrapRef}>{children}</div>
}
