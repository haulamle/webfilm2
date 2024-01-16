import { ReactNode } from 'react'

export interface IRoute {
  path: string
  component: ReactNode | React.LazyExoticComponent<() => JSX.Element>
  name: string
  layout?: (props: { children: JSX.Element }) => JSX.Element
}

interface ISubMenu {
  id: string
  path: string
  icon?: any
}

export interface IMenuRoute {
  id: string
  icon: any
  activeIcon: any
  path?: string
  subMenu?: ISubMenu[]
  permission?: string[]
  isHaveMenu: boolean
}
