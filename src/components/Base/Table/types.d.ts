import { SxProps } from '@mui/material'

export interface DynamicTableProps {
  tableTitle?: React.ReactNode
  headerCols: unknown[]
  rows: unknown[]
  renderHeaderCol: (headerCol: unknown) => React.ReactNode
  handleRowClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void
  renderRowCol: (row: unknown, headerCol: unknown) => React.ReactNode
  renderColStyle?: (headerCol: unknown) => { [key: string]: SxProps }
  headerClass?: string[]
  rowGroupClass?: string[]
  rowClass?: string[]
}
