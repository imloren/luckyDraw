import { LuckyWheel } from '@lucky-canvas/react'
import { SetStateAction, useRef, useState } from 'react'
import Clock from './components/Clock'
import './App.css'

function App() {
  const [prizesText, setPrizesText] = useState('')
  const [blocks] = useState([{ padding: '10px', background: '#869cfa' }])
  const [prizes] = useState([
    { background: '#e9e8fe', fonts: [{ text: '喜茶' }] },
    { background: '#b8c5f2', fonts: [{ text: '古茗' }] },
    { background: '#e9e8fe', fonts: [{ text: '周四晚' }] },
    { background: '#b8c5f2', fonts: [{ text: '霸王茶姬' }] },
    { background: '#e9e8fe', fonts: [{ text: '奈雪の茶' }] },
    { background: '#b8c5f2', fonts: [{ text: '乐乐茶' }] },
    { background: '#e9e8fe', fonts: [{ text: '24章' }] },
    { background: '#b8c5f2', fonts: [{ text: '慕白手作' }] },
    { background: '#e9e8fe', fonts: [{ text: 'O2' }] },
    { background: '#b8c5f2', fonts: [{ text: '茉酸奶' }] }
  ])
  const [buttons] = useState([
    { radius: '40%', background: '#617df2' },
    { radius: '35%', background: '#afc8ff' },
    {
      radius: '30%',
      background: '#869cfa',
      pointer: true,
      fonts: [{ text: '开始', top: '-10px' }]
    }
  ])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const myLucky = useRef<any>()

  const onStart = () => {
    myLucky.current && myLucky.current?.play()
    setTimeout(() => {
      const index = (Math.random() * 10) >> 0
      myLucky.current.stop(index)
    }, 2500)
  }

  return (
    <div className="lucky-draw-wrapper">
      <Clock />

      <LuckyWheel
        ref={myLucky}
        width="400px"
        height="400px"
        blocks={blocks}
        prizes={prizes}
        buttons={buttons}
        onStart={onStart}
        onEnd={(prize: { fonts: { text: SetStateAction<string> }[] }) => {
          setPrizesText(prize.fonts[0].text)
        }}
      />

      {prizesText && (
        <div className="text">
          今天就“盘”它
          <br />
          <span>《{prizesText}》 !!!</span>
        </div>
      )}
    </div>
  )
}

export default App
