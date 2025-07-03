import { LuckyWheel } from '@lucky-canvas/react'
import { useRef, useState } from 'react'
import Clock from './components/Clock'
import './App.css'

type BlockConfig = {
  padding?: string | number
  background?: string
}

type PrizeConfig = {
  background?: string
  fonts?: Array<{ text: string; top?: string | number; fontSize?: string }>
}

type ButtonConfig = {
  radius: string | number
  pointer?: boolean
  background?: string
  fonts?: Array<{ text: string; top?: string | number }>
}

type LuckyWheelInstance = {
  init: () => void
  play: () => void
  stop: (index: number) => void
}

type EndCallbackParam = {
  fonts: Array<{ text: string; top?: string | number }>
}

function App() {
  const [prizesText, setPrizesText] = useState<string>('')

  const [blocks] = useState<BlockConfig[]>([{ padding: '10px', background: '#869cfa' }])

  const [prizes] = useState<PrizeConfig[]>([
    { background: '#e9e8fe', fonts: [{ text: '喜茶' }] },
    { background: '#b8c5f2', fonts: [{ text: '古茗' }] },
    { background: '#e9e8fe', fonts: [{ text: '周四晚' }] },
    { background: '#b8c5f2', fonts: [{ text: '霸王茶姬' }] },
    { background: '#e9e8fe', fonts: [{ text: '奈雪の茶' }] },
    { background: '#b8c5f2', fonts: [{ text: '乐乐茶' }] },
    { background: '#e9e8fe', fonts: [{ text: '24章' }] },
    { background: '#b8c5f2', fonts: [{ text: '牧白手作' }] },
    { background: '#e9e8fe', fonts: [{ text: 'O2' }] },
    { background: '#b8c5f2', fonts: [{ text: '茉酸奶' }] },
    { background: '#e9e8fe', fonts: [{ text: 'CoCo' }] },
    { background: '#b8c5f2', fonts: [{ text: '茶百道' }] },
  ])

  const [buttons] = useState<ButtonConfig[]>([
    { radius: '40%', background: '#617df2' },
    { radius: '35%', background: '#afc8ff' },
    {
      radius: '30%',
      background: '#869cfa',
      pointer: true,
      fonts: [{ text: '开始', top: '-10px' }],
    },
  ])

  const myLucky = useRef<LuckyWheelInstance>(null)

  const onStart = (): void => {
    myLucky.current?.play()
    setTimeout(() => {
      const index = Math.floor(Math.random() * 24)
      myLucky.current?.stop(index)
    }, 2500)
  }

  const onEnd = (prize: EndCallbackParam): void => {
    setPrizesText(prize.fonts[0].text)
  }

  return (
    <div className='lucky-draw-wrapper'>
      <Clock />

      <LuckyWheel
        ref={myLucky}
        width='400px'
        height='400px'
        blocks={blocks}
        prizes={prizes}
        buttons={buttons}
        onStart={onStart}
        onEnd={onEnd}
      />

      {prizesText && (
        <div className='text'>
          今天就"盘"<span>《{prizesText}》 !!!</span>
        </div>
      )}
    </div>
  )
}

export default App
