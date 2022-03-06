import React from 'react'
import { SxProps } from '@mui/material'
import { render, screen } from '@testing-library/react'

import DynamicTable from '@Components/Base/Table'

const headerCols = [
  {
    id: 'planet',
    label: 'Planet',
    style: {
      flex: '1 1 20%',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '1rem'
    }
  },
  {
    id: 'theater-name',
    label: 'Theater Name',
    style: {
      flex: '1 1 30%',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '1rem'
    }
  },
  {
    id: 'coordinate',
    label: 'Coordinate',
    style: {
      flex: '1 1 50%',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '1rem'
    }
  }
]
const rows = [
  {
    id: 'row-1',
    planet: 'Thilao',
    theaterName: 'Huggy Woolysocks',
    coordinate: 'Windy Alley, Living Dead Street'
  },
  {
    id: 'row-2',
    planet: 'Nienus',
    theaterName: 'Buttermilk Kingfish',
    coordinate: 'Enchanted Highway, Western Route'
  },
  {
    id: 'row-3',
    planet: 'Cakinus',
    theaterName: 'Squids Pealike',
    coordinate: 'Scorpion Pass, Falcon Walk'
  },
  {
    id: 'row-4',
    planet: 'Cakinus',
    theaterName: 'Butterbean Stevens',
    coordinate: 'Witgrave Trail'
  }
]

const renderHeaderCol = (headerCol: unknown) => {
  const h = headerCol as typeof headerCols[0]
  switch (h.id) {
    case 'planet':
    case 'theater-name':
    case 'coordinate':
      return <div onClick={(e) => console.log(e.target, h.id)}>{h.label}</div>
    default:
      return <React.Fragment />
  }
}
const handleRowClick = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  index: number
) => {
  e.stopPropagation()
  console.log(index)
}
const renderRowCol = (row: unknown, headerCol: unknown) => {
  const r = row as typeof rows[0]
  const h = headerCol as typeof headerCols[0]
  switch (h.id) {
    case 'planet':
      return (
        <div
          onClick={(e) => {
            e.stopPropagation()
            console.log(r.planet)
          }}
        >
          {r.planet}
        </div>
      )
    case 'theater-name':
      return (
        <div
          onClick={(e) => {
            e.stopPropagation()
            console.log(r.theaterName)
          }}
        >
          {r.theaterName}
        </div>
      )
    case 'coordinate':
      return (
        <div
          onClick={(e) => {
            e.stopPropagation()
            console.log(r.coordinate)
          }}
        >
          {r.coordinate}
        </div>
      )
    default:
      return <React.Fragment />
  }
}
const renderColStyle = (headerCol: unknown) => {
  const h = headerCol as typeof headerCols[0]
  return h.style as { [key: string]: SxProps }
}

describe('[src][components][Base][Table] DynamicTable', () => {
  it('should render correctly', async () => {
    render(
      <DynamicTable
        tableTitle="Theaters in the universe:"
        headerCols={headerCols}
        rows={rows}
        renderHeaderCol={renderHeaderCol}
        handleRowClick={handleRowClick}
        renderRowCol={renderRowCol}
        renderColStyle={renderColStyle}
      />
    )
    expect(await screen.findByRole('table')).toBeTruthy()
    expect((await screen.findAllByRole('row')).length).toBe(1 + rows.length)
    expect((await screen.findAllByRole('cell')).length).toBe(
      headerCols.length * rows.length
    )
  })
})
