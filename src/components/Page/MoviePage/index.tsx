import React, { memo } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

import Typography from '@mui/material/Typography'

import ActionPage from '@Components/Page/MoviePage/Action'
import ComedyPage from '@Components/Page/MoviePage/Comedy'
import FantasyPage from '@Components/Page/MoviePage/Fantasy'
import IndexPage from '@Components/Page/MoviePage/IndexPage'

import { SubRoute } from './types'

export const SUB_ROUTE_LIST: SubRoute[] = [
  { id: 'action', path: '/action', component: <ActionPage /> },
  { id: 'comedy', path: '/comedy', component: <ComedyPage /> },
  { id: 'fantasy', path: '/fantasy', component: <FantasyPage /> }
]

function MoviePage(): React.ReactElement {
  const { path } = useRouteMatch()
  return (
    <React.Fragment>
      <Typography variant="h1" component="div">
        Movie page
      </Typography>
      {SUB_ROUTE_LIST.map((r) => (
        <Route key={r.id} path={`${path}${r.path}`}>
          {r.component}
        </Route>
      ))}
      <Route exact path={path}>
        <IndexPage />
      </Route>
    </React.Fragment>
  )
}

export default memo(MoviePage)
