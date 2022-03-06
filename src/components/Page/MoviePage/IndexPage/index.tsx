import React, { memo } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import { useTheme } from '@mui/material/styles'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

import { SUB_ROUTE_LIST } from '@Components/Page/MoviePage'

function MoviePageIndex(): React.ReactElement {
  const history = useHistory()
  const { url } = useRouteMatch()
  const theme = useTheme()
  const handleOnClick = (path: string) => () => {
    history.push(`${url}${path}`)
  }
  return (
    <Stack direction="row" spacing={1}>
      {SUB_ROUTE_LIST.map((r) => (
        <Chip
          key={r.id}
          label={r.id}
          onClick={handleOnClick(r.path)}
          sx={{
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.main
            }
          }}
        />
      ))}
    </Stack>
  )
}

export default memo(MoviePageIndex)
