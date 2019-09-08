import { useState, useEffect, useRef } from 'react'

export function useNearScreen () {
  const [Show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(
        function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
      observer.observe(element.current)
    })
  }, [element])

  return [Show, element]
}
