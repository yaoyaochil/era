import React from 'react'
import ContentStep from '../ContentStep'
import AsterikIcon from '../icons/AsterikIcon'

const ElectronContent = () => {
  return (
    <div>
      <h2 className="flex items-center gap-4">
        Electron
        <div className="p-1 rounded-md bg-primary/10">
          <img src="res://icons/electron.png" className="w-4 h-4" />
        </div>
      </h2>
      <p>凭借现代 Chromium 的强大功能，Electron 为您提供了一个无偏见的空白画布来构建您的应用程序。</p>
      <p>
        选择集成前端生态系统中您喜爱的库和框架，或者使用定制的 HTML 代码开辟自己的道路。
      </p>

      <div className="welcome-content-steps">
        <ContentStep
          title="Web 技术"
          description="Electron 嵌入 Chromium 和 Node.js，使开发者能够构建桌面应用"
          icon={AsterikIcon}
        />

        <ContentStep
          title="跨平台"
          description="使用 Electron 轻松构建跨平台桌面应用程序"
          icon={AsterikIcon}
        />

        <ContentStep
          title="开源"
          description="Electron 是一个由社区维护的开源项目"
          icon={AsterikIcon}
        />

        <ContentStep
          title="原生 API"
          description="使用 Electron 的内置模块轻松访问原生 API"
          icon={AsterikIcon}
        />
      </div>

      <p className="learn-more">
在{' '}了解更多关于 Electron 的信息
        <a href="https://www.electronjs.org/" target="_blank" rel="noreferrer">
          electronjs.org
        </a>
      </p>
    </div>
  )
}

export default ElectronContent
