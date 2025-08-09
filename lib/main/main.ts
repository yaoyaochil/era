import { app, BrowserWindow } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { createAppWindow } from './app'

// 当 Electron 完成初始化并准备创建浏览器窗口时，将调用此方法。
// 某些 API 只能在此事件发生后使用。
app.whenReady().then(() => {
  // 为 Windows 设置应用程序用户模型 ID
  electronApp.setAppUserModelId('com.electron')
  // 创建应用程序窗口
  createAppWindow()

  // 在开发环境中默认通过 F12 打开或关闭开发者工具
  // 在生产环境中忽略 CommandOrControl + R。
  // 参见 https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  app.on('activate', function () {
    // 在 macOS 上，当点击 dock 图标且没有其他窗口打开时，
    // 通常会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) {
      createAppWindow()
    }
  })
})

// 当所有窗口关闭时退出应用程序，除了在 macOS 上。在 macOS 上，
// 应用程序和菜单栏通常保持活动状态，直到用户明确使用 Cmd + Q 退出。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 在此文件中，您可以包含应用程序特定的其余主进程代码。
// 您也可以将它们放在单独的文件中并在此处导入。
