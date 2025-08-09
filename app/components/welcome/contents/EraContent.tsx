import ContentStep from '../ContentStep'
import CodeWindowIcon from '../icons/CodeWindowIcon'
import FanIcon from '../icons/FanIcon'
import ColorSchemeIcon from '../icons/ColorSchemeIcon'
import AsterikIcon from '../icons/AsterikIcon'
import { Icon } from '@iconify-icon/react';

const EraContent = () => {
  return (
    <div className="h-full">
      <h2 className="flex items-center gap-4">
        Electron React 应用
        <div className="p-1 rounded-md bg-primary/10">
          <img src="res://icons/era.svg" className="w-4 h-4" />
        </div>
      </h2>

      <div className="welcome-content-steps">
        <ContentStep
          title="自定义窗口标题栏和菜单"
          description="自定义应用程序窗口的外观和感觉"
          icon={CodeWindowIcon}
        />

        <ContentStep
          title="闪电般快速的热模块替换"
          description="无论应用程序大小如何，都能保持快速的热模块替换"
          icon={FanIcon}
        />

        <ContentStep
          title="深色和浅色模式"
          description="只需点击按钮即可在深色和浅色模式之间切换"
          icon={ColorSchemeIcon}
        />

        <ContentStep
          title="HeroUI + Tailwind"
          description="使用 HeroUI 构建的可重用组件集合"
          icon={AsterikIcon}
        />

        <ContentStep
          title="TanStack Router"
          description="使用 TanStack Router 构建的路由系统"
          icon={() => <Icon icon="tanstack-router" className="w-6 h-6" />}
        />
      </div>

      <p className="learn-more">
        在{' '}
        <a href="https://github.com/guasam/electron-react-app" target="_blank" rel="noreferrer">
          github.com
        </a>{' '}
        了解更多关于 Electron React 应用的信息
      </p>
    </div>
  )
}

export default EraContent
