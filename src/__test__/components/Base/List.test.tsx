import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import DynamicList, { mapNestedItem } from '@Components/Base/List'
import { List } from '@Components/Base/List/types'

const LIST_DEFAULT_OPEN: List[] = [
  {
    id: 'item-1',
    icon: <AccountCircleIcon />,
    label: 'item-1-label',
    handleClick: (id: string) => {
      console.log(id)
    },
    defaultOpen: true,
    nested: true,
    children: [
      {
        id: 'item-1-nested-1',
        label: 'item-nested-1-label',
        handleClick: (id: string) => {
          console.log(id)
        }
      },
      {
        id: 'item-1-nested-2',
        label: 'item-1-nested-2-label',
        handleClick: (id: string) => {
          console.log(id)
        }
      }
    ]
  },
  {
    id: 'item-2',
    label: 'item-2-lable',
    handleClick: (id: string) => {
      console.log(id)
    },
    nested: true,
    children: [
      {
        id: 'item-2-nested-1',
        label: 'item-2-nested-1-label',
        handleClick: (id: string) => {
          console.log(id)
        }
      },
      {
        id: 'item-2-nested-2',
        label: 'item-2-nested-2-label',
        handleClick: (id: string) => {
          console.log(id)
        }
      }
    ]
  },
  {
    id: 'item-3',
    label: 'item-3-lable',
    handleClick: (id: string) => {
      console.log(id)
    }
  }
]
const LIST: List[] = [
  {
    id: 'item-1',
    icon: <AccountCircleIcon />,
    label: 'item-1-label',
    handleClick: (id: string) => {
      console.log(id)
    },
    nested: true,
    children: [
      {
        id: 'item-1-nested-1',
        label: 'item-nested-1-label',
        handleClick: (id: string) => {
          console.log(id)
        }
      },
      {
        id: 'item-1-nested-2',
        label: 'item-1-nested-2-label',
        handleClick: (id: string) => {
          console.log(id)
        }
      }
    ]
  },
  {
    id: 'item-2',
    label: 'item-2-lable',
    handleClick: (id: string) => {
      console.log(id)
    },
    nested: true,
    children: [
      {
        id: 'item-2-nested-1',
        label: 'item-2-nested-1-label',
        handleClick: (id: string) => {
          console.log(id)
        }
      },
      {
        id: 'item-2-nested-2',
        label: 'item-2-nested-2-label',
        handleClick: (id: string) => {
          console.log(id)
        }
      }
    ]
  },
  {
    id: 'item-3',
    label: 'item-3-lable',
    handleClick: (id: string) => {
      console.log(id)
    }
  }
]

describe('[src][components][Base][List] mapNestedItem', () => {
  it('should return correct result', () => {
    expect(mapNestedItem(LIST)).toEqual({ 'item-1': false, 'item-2': false })
    expect(mapNestedItem(LIST_DEFAULT_OPEN)).toEqual({
      'item-1': true,
      'item-2': false
    })
  })
})

describe('[src][components][Base][List] DynamicList', () => {
  it('should render correctly', async () => {
    render(<DynamicList list={LIST} />)
    expect((await screen.findAllByRole('button')).length).toBe(LIST.length)
    expect((await screen.findAllByTestId('ExpandMoreIcon')).length).toBe(
      LIST.filter((l) => l.nested).length
    )
  })
  it('should display correct expend icon', async () => {
    render(<DynamicList list={LIST} />)
    await act(async () => {
      fireEvent.click((await screen.findAllByTestId('ExpandMoreIcon'))[0])
      expect((await screen.findAllByTestId('ExpandLessIcon')).length).toBeTruthy()
    })
  })
})
