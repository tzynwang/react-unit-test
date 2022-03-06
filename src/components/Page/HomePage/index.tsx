import React, { memo } from 'react'
import Typography from '@mui/material/Typography'

function HomePage(): React.ReactElement {
  return (
    <Typography variant="h1" component="div">
      Home page
    </Typography>
  )
}

export default memo(HomePage)
