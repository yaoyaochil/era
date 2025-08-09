import React from 'react'
import ContentStep from '../ContentStep'
import AsterikIcon from '../icons/AsterikIcon'

const ViteContent = () => {
  return (
    <div>
      <h2 className="flex items-center gap-4">
        Electron Vite
        <div className="p-1 rounded-md bg-primary/10">
          <img src="res://icons/vite.png" className="w-4 h-4" />
        </div>
      </h2>
      <p>将 Electron 的桌面功能与 Vite 的闪电般快速开发体验相结合。</p>
      <p>
        这种强大的组合提供了卓越的开发者体验，具有即时 HMR，同时允许您构建功能丰富的桌面应用程序。
      </p>

      <div className="welcome-content-steps">
        <ContentStep
          title="Vite 驱动"
          description="继承 Vite 的所有优势，使用方式与 Vite 相同"
          icon={AsterikIcon}
        />

        <ContentStep
          title="优化资源处理"
          description="为 Electron 主进程和渲染进程优化资源处理"
          icon={AsterikIcon}
        />

        <ContentStep
          title="源码保护"
          description="编译为 V8 字节码以保护源代码"
          icon={AsterikIcon}
        />

        <ContentStep
          title="预配置"
          description="为 Electron 预配置，无需担心配置问题"
          icon={AsterikIcon}
        />
      </div>

      <p className="learn-more">
        在{' '}了解更多关于 Electron Vite 的信息
        <a href="https://electron-vite.org/guide/" target="_blank" rel="noreferrer">
          electron-vite.org
        </a>
      </p>
    </div>
  )
}

export default ViteContent
