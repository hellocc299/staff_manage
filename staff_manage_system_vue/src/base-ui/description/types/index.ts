type IDesType = 'common' | 'statu' | 'sex' | 'date'
export interface IDesItem{
  field: string
  type: IDesType
  label: string

}

export interface IDes {
  title: string
  desItem: IDesItem[]
  column?: number
  size?: string
}
