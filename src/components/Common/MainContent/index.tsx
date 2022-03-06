import React, { memo } from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '@Components/Page/HomePage'
import MoviePage from '@Components/Page/MoviePage'
import TheaterPage from '@Components/Page/TheaterPage'
import AboutPage from '@Components/Page/AboutPage'

function MainContent(): React.ReactElement {
  return (
    <Switch>
      <Route path="/movie">
        <MoviePage />
      </Route>
      <Route path="/theater">
        <TheaterPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  )
}

export default memo(MainContent)
