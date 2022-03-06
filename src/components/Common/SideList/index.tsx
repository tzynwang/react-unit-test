import React, { memo } from 'react'
import { useHistory } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor'
import InfoIcon from '@mui/icons-material/Info'

import DynamicList from '@Components/Base/List'
import { List } from '@Components/Base/List/types'

function SideList(): React.ReactElement {
  const history = useHistory();
  const LIST: List[] = [
    {
      id: 'item-1',
      label: 'Home Page',
      icon: <HomeIcon />,
      handleClick: (id: string) => {
        history.push('/')
      }
    },
    {
      id: 'item-2',
      label: 'Movie Genres',
      icon: <LocalMoviesIcon />,
      handleClick: () => {
        history.push('/movie')
      },
      nested: true,
      children: [
        { id: 'movie-1', label: 'Action', handleClick: (id: string) => {
          history.push('/movie/action')
        } },
        { id: 'movie-2', label: 'Comedy', handleClick: (id: string) => {
          history.push('/movie/comedy')
        } },
        { id: 'movie-3', label: 'Fantasy', handleClick: (id: string) => {
          history.push('/movie/fantasy')
        } }
      ]
    },
    {
      id: 'item-3',
      label: 'Theater',
      icon: <CameraIndoorIcon />,
      handleClick: () => {
        history.push('/theater')
      }
    },
    {
      id: 'item-4',
      label: 'About',
      icon: <InfoIcon />,
      handleClick: (id: string) => {
        history.push('/about')
      }
    }
  ]

  return <DynamicList list={LIST} />
}

export default memo(SideList)
