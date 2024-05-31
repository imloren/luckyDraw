import { useState, useEffect, useRef } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const requestRef = useRef<any>()

  const updateTime = () => {
    setTime(new Date())
    requestRef.current = requestAnimationFrame(updateTime)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateTime)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  return <h1>北京时间：{time.toLocaleTimeString()}</h1>
}

export default Clock
