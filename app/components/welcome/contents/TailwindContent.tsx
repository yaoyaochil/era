import React from 'react'
import ContentStep from '../ContentStep'
import AsterikIcon from '../icons/AsterikIcon'

const TailwindContent = () => {
  return (
    <div>
      <h2 className="flex items-center gap-4">
        Tailwind CSS
        <div className="p-1 rounded-md bg-primary/10">
          <img src="res://icons/tailwind.png" className="w-4 h-4" />
        </div>
      </h2>
      <p>一个实用优先的 CSS 框架，包含可以组合构建任何设计的类，直接在您的标记中使用。</p>
      <p>
        Tailwind CSS 通过扫描您所有的 HTML 文件、JavaScript 组件和任何其他模板中的类名，生成相应的样式，然后将它们写入静态 CSS 文件来工作。
      </p>

      <div className="welcome-content-steps">
        <ContentStep
          title="实用优先"
          description="从受限的原始实用程序集构建复杂组件"
          icon={AsterikIcon}
        />

        <ContentStep
          title="组件友好"
          description="使用 Tailwind 的 @apply 指令轻松提取组件"
          icon={AsterikIcon}
        />

        <ContentStep
          title="响应式设计"
          description="使用 Tailwind 的响应式实用程序轻松构建响应式设计"
          icon={AsterikIcon}
        />

        <ContentStep
          title="深色模式"
          description="深色模式变体直接内置到框架中"
          icon={AsterikIcon}
        />
      </div>

      <p className="learn-more">
在{' '}了解更多关于 Tailwind CSS 的信息
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          tailwindcss.com
        </a>
      </p>
    </div>
  )
}

export default TailwindContent
