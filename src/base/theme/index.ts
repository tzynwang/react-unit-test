import { createTheme } from '@mui/material/styles'
import palette from './palette'
import ScopedCssBaseline from './components/ScopedCssBaseline'
import SvgIcon from './components/SvgIcon'
import Typography from './components/Typography'

const theme = createTheme(palette, ScopedCssBaseline, SvgIcon, Typography)

export default theme
