export default {
  components: {
    MuiScopedCssBaseline: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          '.MuiBox-root.tableRowGroupDefault .tableRowDefault:nth-of-type(even)': {
            border: '1px dashed #B4A582'
          }
        }
      }
    }
  }
}
