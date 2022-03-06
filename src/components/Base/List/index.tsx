import React, { memo, useMemo, useState, useEffect } from 'react'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'

import { DynamicListProps, List as ListI, NestedItem } from './types'

export function mapNestedItem(list: ListI[]): NestedItem {
  const hasChild = list.filter((l) => l.nested && l.children?.length)
  return hasChild.reduce((prev, current) => {
    let obj: NestedItem = {}
    if (current.defaultOpen) {
      obj[current.id] = true
    } else if (current.nested) {
      obj[current.id] = false
    }
    return { ...prev, ...obj }
  }, {})
}

function DynamicList(props: DynamicListProps): React.ReactElement {
  // states
  const { list } = props
  const nestedItem = useMemo(() => mapNestedItem(list), [list])
  const [toggle, setToggle] = useState<NestedItem>(nestedItem)
  // functions
  const handleToggle = (id: string) => {
    const current = { ...toggle }
    current[id] = !current[id]
    setToggle(current)
  }
  // hooks
  useEffect(() => {
    setToggle(nestedItem)
  }, [nestedItem])
  // main
  return (
    <List>
      {list.map((l) => {
        const children =
          l.nested && l.children ? (
            <Collapse in={toggle[l.id]} unmountOnExit>
              <List>
                {l.children.map((c) => (
                  <ListItemButton key={c.id} onClick={() => c.handleClick(c.id)}>
                    {c.icon && <ListItemIcon>{c.icon}</ListItemIcon>}
                    <ListItemText primary={c.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          ) : null
        return (
          <React.Fragment key={l.id}>
            <ListItemButton
              onClick={() => {
                if (l.nested && l.children?.length) {
                  handleToggle(l.id)
                }
                l.handleClick(l.id)
              }}
            >
              {l.icon && <ListItemIcon>{l.icon}</ListItemIcon>}
              <ListItemText primary={l.label} />
              {toggle[l.id] && <ExpandLess />}
              {toggle[l.id] === false && <ExpandMore />}
            </ListItemButton>
            {children}
          </React.Fragment>
        )
      })}
    </List>
  )
}

export default memo(DynamicList)
