import type { TitlebarMenu } from '@/app/components/window/TitlebarMenu'

export const menuItems: TitlebarMenu[] = [
  {
    name: '文件',
    items: [
      {
        name: '退出',
        action: 'window-close',
      },
    ],
  },
  {
    name: '编辑',
    items: [
      {
        name: '撤销',
        action: 'web-undo',
        shortcut: 'Ctrl+Z',
      },
      {
        name: '重做',
        action: 'web-redo',
        shortcut: 'Ctrl+Y',
      },
      {
        name: '---',
      },
      {
        name: '剪切',
        action: 'web-cut',
        shortcut: 'Ctrl+X',
      },
      {
        name: '复制',
        action: 'web-copy',
        shortcut: 'Ctrl+C',
      },
      {
        name: '粘贴',
        action: 'web-paste',
        shortcut: 'Ctrl+V',
      },
      {
        name: '删除',
        action: 'web-delete',
      },
      {
        name: '---',
      },
      {
        name: '全选',
        action: 'web-select-all',
        shortcut: 'Ctrl+A',
      },
    ],
  },
  {
    name: '视图',
    items: [
      {
        name: '重新加载',
        action: 'web-reload',
        shortcut: 'Ctrl+R',
      },
      {
        name: '强制重新加载',
        action: 'web-force-reload',
        shortcut: 'Ctrl+Shift+R',
      },
      {
        name: '切换开发者工具',
        action: 'web-toggle-devtools',
        shortcut: 'Ctrl+Shift+I',
      },
      {
        name: '---',
      },
      {
        name: '实际大小',
        action: 'web-actual-size',
        shortcut: 'Ctrl+0',
      },
      {
        name: '放大',
        action: 'web-zoom-in',
        shortcut: 'Ctrl++',
      },
      {
        name: '缩小',
        action: 'web-zoom-out',
        shortcut: 'Ctrl+-',
      },
      {
        name: '---',
      },
      {
        name: '切换全屏',
        action: 'web-toggle-fullscreen',
        shortcut: 'F11',
      },
    ],
  },
  {
    name: '窗口',
    items: [
      {
        name: '深色模式',
        action: 'window-darkmode-toggle',
        shortcut: 'Toggle',
        actionCallback: () => {
          document.documentElement.classList.toggle('dark')
        },
      },
      {
        name: '---',
      },
      {
        name: '最大化',
        action: 'window-maximize-toggle',
        shortcut: 'Toggle',
      },
      {
        name: '最小化',
        action: 'window-minimize',
        shortcut: 'Ctrl+M',
      },
      {
        name: '关闭',
        action: 'window-close',
        shortcut: 'Ctrl+W',
      },
    ],
  },
  {
    name: '致谢',
    items: [
      {
        name: 'Guasam',
        action: 'web-open-url',
        actionParams: ['https://github.com/guasam'],
        shortcut: '@guasam',
      },
    ],
  },
]
