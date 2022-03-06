import React, { memo } from 'react'
import Typography from '@mui/material/Typography'

function AboutPage(): React.ReactElement {
  return (
    <Typography variant="h1" component="div">
      About this site
    </Typography>
  )
}

export default memo(AboutPage)
