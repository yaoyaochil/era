import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import api from './api'

// 使用 `contextBridge` API 将 Electron API 暴露给渲染器
// 仅在启用上下文隔离时使用，否则直接添加到 DOM 全局对象。
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
