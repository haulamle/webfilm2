import { ReactNode } from 'react'

export interface ITabItem {
  key: string
  label: string
  component: ReactNode
  typeTab?: string
}
