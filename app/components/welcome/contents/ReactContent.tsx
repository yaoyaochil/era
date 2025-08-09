import React from 'react'
import ContentStep from '../ContentStep'
import AsterikIcon from '../icons/AsterikIcon'

const ReactContent = () => {
  return (
    <div>
      <h2 className="flex items-center gap-4">
        React
        <div className="p-1 rounded-md bg-primary/10">
          <img src="res://icons/react.png" className="w-4 h-4" />
        </div>
      </h2>
      <p>React 是一个用于构建用户界面的声明式、高效且灵活的 JavaScript 库。</p>
      <p>
        它让您可以使用称为组件的独立部分构建用户界面，为您的应用程序创建可重用和可维护的代码。
      </p>

      <div className="welcome-content-steps">
        <ContentStep
          title="基于组件"
          description="构建封装的组件，为复杂的用户界面管理其状态"
          icon={AsterikIcon}
        />

        <ContentStep
          title="声明式"
          description="为每个应用程序状态创建简单视图的交互式用户界面"
          icon={AsterikIcon}
        />

        <ContentStep
          title="一次学习，随处编写"
          description="开发新功能而无需重写现有代码"
          icon={AsterikIcon}
        />

        <ContentStep
          title="虚拟 DOM"
          description="轻量级 DOM 表示，实现最佳渲染性能"
          icon={AsterikIcon}
        />
      </div>

      <p className="learn-more">
在{' '}了解更多关于 React 的信息
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          reactjs.org
        </a>
      </p>
    </div>
  )
}

export default ReactContent
