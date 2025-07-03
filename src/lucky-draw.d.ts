declare module '@lucky-canvas/react' {
  import { ForwardRefExoticComponent, RefAttributes } from 'react'

  // 字体配置类型
  interface FontConfig {
    text: string
    top?: string | number
    fontColor?: string
    fontSize?: string | number
    fontStyle?: string
    fontWeight?: string | number
    lineHeight?: string | number
    wordWrap?: boolean
    lengthLimit?: string | number
    lineClamp?: number
  }

  // 图片配置类型
  interface ImageConfig {
    src: string
    top?: string | number
    width?: string | number
    height?: string | number
    rotate?: boolean
  }

  // 背景块配置类型
  interface BlockConfig {
    padding?: string | number
    background?: string
    imgs?: ImageConfig[]
  }

  // 奖品配置类型
  interface PrizeConfig {
    range?: number
    background?: string
    fonts?: FontConfig[]
    imgs?: ImageConfig[]
  }

  // 按钮配置类型
  interface ButtonConfig {
    radius: string | number
    pointer?: boolean
    background?: string
    fonts?: FontConfig[]
    imgs?: ImageConfig[]
  }

  // 默认配置类型
  interface DefaultConfig {
    gutter?: string | number
    stopRange?: number
    offsetDegree?: number
    speed?: number
    accelerationTime?: number
    decelerationTime?: number
  }

  // 默认样式类型
  interface DefaultStyle {
    background?: string
    fontColor?: string
    fontSize?: string | number
    fontStyle?: string
    fontWeight?: string | number
    lineHeight?: string | number
    wordWrap?: boolean
    lengthLimit?: string | number
    lineClamp?: number
  }

  // 组件实例类型
  interface LuckyWheelInstance {
    init: () => void
    play: () => void
    stop: (index: number) => void
  }

  // 回调函数参数类型
  interface StartCallbackParam {
    // 开始回调的参数
  }

  interface EndCallbackParam {
    fonts: FontConfig[]
    // 其他可能的属性
  }

  // LuckyWheel 组件 props 类型
  interface LuckyWheelProps {
    width?: string | number
    height?: string | number
    blocks?: BlockConfig[]
    prizes?: PrizeConfig[]
    buttons?: ButtonConfig[]
    defaultConfig?: DefaultConfig
    defaultStyle?: DefaultStyle
    onStart?: (e: StartCallbackParam) => void
    onEnd?: (prize: EndCallbackParam) => void
  }

  // 导出 LuckyWheel 组件
  export const LuckyWheel: ForwardRefExoticComponent<
    LuckyWheelProps & RefAttributes<LuckyWheelInstance>
  >
}
