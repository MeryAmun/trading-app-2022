import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import React from 'react'
import {RouteType} from '../../routes/index'

interface Props {
    links: RouteType[];
    menuClickHandler: (link: string) => void
}

export const Menu : React.FC<Props> = ({links, menuClickHandler}): JSX.Element => {
    
  
  return (
    <div>
        <MenuList>
            {
                links?.map((link) => (
                    <MenuItem key={link.path} onClick={() => menuClickHandler(link.path)}>
                        <ListItemIcon>
                            {<link.icon fontSize='small'/>}
                        </ListItemIcon>
                        <ListItemText>{link.label}</ListItemText>
                        </MenuItem>
                ))
            }
        </MenuList>
    </div>
  )
}
