export type ColorItemStatus = 'new' | 'picked'

export interface Color {
  id: string
  status: ColorItemStatus
  value: string
}
