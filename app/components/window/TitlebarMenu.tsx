import { useEffect, useRef } from 'react'
import { useWindowContext } from '@/lib/window'
import { useTitlebarContext } from './TitlebarContext'

/**
 * Renders the titlebar menu component.
 * Displays a list of menu items in the titlebar.
 */
const TitlebarMenu = () => {
  const { menuItems } = useWindowContext().titlebar

  // 如果没有菜单项，则隐藏菜单
  if (!menuItems) return null

  return (
    <div className="window-titlebar-menu">
      {menuItems?.map((menu, index) => <TitlebarMenuItem key={index} menu={menu} index={index} />)}
    </div>
  )
}

/**
 * Renders a single menu item within the titlebar.
 * Handles menu activation, popup toggling, and mouse events.
 *
 * @param menu - The menu configuration
 * @param index - The index of the menu item
 */
const TitlebarMenuItem = ({ menu, index }: { menu: TitlebarMenu; index: number }) => {
  const { activeMenuIndex, setActiveMenuIndex } = useTitlebarContext()
  const menuItemRef = useRef<HTMLDivElement | null>(null)

  const togglePopup = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    // 检查当前菜单项是否为活动项
    if (activeMenuIndex === index) {
      menuItemRef.current?.classList.remove('active')
      setActiveMenuIndex(null)
    }
    // 如果菜单项未激活，则激活它
    else if (!menuItemRef.current?.classList.contains('active')) {
      setActiveMenuIndex(index)
      menuItemRef.current?.classList.add('active')
    }
  }

  const handleMouseOver = () => {
    if (activeMenuIndex != null) {
      setActiveMenuIndex(index)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuItemRef.current &&
        !menuItemRef.current.contains(event.target as Node) &&
        menuItemRef.current.classList.contains('active')
      ) {
        setActiveMenuIndex(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setActiveMenuIndex])

  useEffect(() => {
    if (activeMenuIndex !== index) {
      menuItemRef.current?.classList.remove('active')
    } else {
      menuItemRef.current?.classList.add('active')
    }
  }, [activeMenuIndex, index])

  return (
    <div className="titlebar-menuItem" ref={menuItemRef}>
      <div
        className="menuItem-label"
        onClick={(e) => togglePopup(e)}
        onMouseOver={handleMouseOver}
        onMouseDown={(e) => e.preventDefault()}
      >
        {menu.name}
      </div>
      {activeMenuIndex === index && <TitlebarMenuPopup menu={menu} />}
    </div>
  )
}

/**
 * Renders a popup menu containing a list of menu items.
 * Each menu item can have an action, shortcut, and optional parameters.
 *
 * @param menu - The menu configuration containing items to display
 */
const TitlebarMenuPopup = ({ menu }: { menu: TitlebarMenu }) => {
  return (
    <div className="menuItem-popup">
      {menu.items.map((item, index) => (
        <TitlebarMenuPopupItem key={index} item={item} />
      ))}
    </div>
  )
}

/**
 * Renders a single menu item within a popup menu.
 * Handles actions, shortcuts, and separators.
 *
 * @param item - The menu item configuration
 */
const TitlebarMenuPopupItem = ({ item }: { item: TitlebarMenuItem }) => {
  const { setActiveMenuIndex } = useTitlebarContext()

  function handleAction() {
    // 检查项目是否有有效的操作回调
    if (typeof item.actionCallback === 'function') {
      item.actionCallback()
      setActiveMenuIndex(null)
      return
    }

    // 使用提供的参数调用操作
    window.api.invoke(item.action!, ...(item.actionParams ? item.actionParams : []))
    setActiveMenuIndex(null)
  }

  if (item.name === '---') {
    return <div className="menuItem-popupItem menuItem-separator" />
  }

  return (
    <div className="menuItem-popupItem" onClick={handleAction}>
      <div>{item.name}</div>
      {item.shortcut && <div className="menuItem-shortcut">{item.shortcut}</div>}
    </div>
  )
}

interface TitlebarMenuItem {
  name: string
  action?: string
  actionParams?: (string | number | object)[]
  shortcut?: string
  items?: TitlebarMenuItem[]
  actionCallback?: () => void
}

interface TitlebarMenu {
  name: string
  items: TitlebarMenuItem[]
}

export { TitlebarMenu, TitlebarMenuItem, TitlebarMenuPopup, TitlebarMenuPopupItem }
