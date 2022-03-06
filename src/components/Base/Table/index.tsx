import React, { memo } from 'react'
import classNames from 'classnames'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'

import Styles from './index.module.css'
import { DynamicTableProps } from './types'

function DynamicTable(props: DynamicTableProps): React.ReactElement {
  const {
    tableTitle,
    headerCols,
    rows,
    renderHeaderCol,
    handleRowClick,
    renderRowCol,
    renderColStyle,
    headerClass,
    rowGroupClass,
    rowClass
  } = props
  const theme = useTheme()

  return (
    <div role="table" className="table" aria-describedby="tableTitle">
      {tableTitle && <div id="tableTitle">{tableTitle}</div>}
      <Box
        role="row"
        className={classNames(Styles.tableHeaderDefault, headerClass)}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText
        }}
      >
        {headerCols.map((h, index) => (
          <Box
            role="columnheader"
            key={`headerCols-${index}`}
            sx={renderColStyle ? renderColStyle(h) : null}
          >
            {renderHeaderCol(h)}
          </Box>
        ))}
      </Box>
      <Box
        role="rowgroup"
        className={classNames(Styles.tableRowGroupDefault, rowGroupClass)}
      >
        {rows.map((r, index) => (
          <Box
            role="row"
            key={`row-${index}`}
            className={classNames(Styles.tableRowDefault, rowClass)}
            sx={{ backgroundColor: theme.palette.background.default }}
            onClick={(e) => handleRowClick(e, index)}
          >
            {headerCols.map((h, index) => (
              <Box
                role="cell"
                key={`cell-${index}`}
                sx={renderColStyle ? renderColStyle(h) : null}
              >
                {renderRowCol(r, h)}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default memo(DynamicTable)
