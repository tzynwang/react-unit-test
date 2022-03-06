import React, { memo } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import SideList from '@Components/Common/SideList'
import MainContent from '@Components/Common/MainContent'
import Styles from './index.module.css'

function App(): React.ReactElement {
  return (
    <Router>
      <div className={Styles.container}>
        <div className={Styles.side}>
          <SideList />
        </div>
        <div className={Styles.main}>
          <MainContent />
        </div>
      </div>
    </Router>
  )
}

export default memo(App)
