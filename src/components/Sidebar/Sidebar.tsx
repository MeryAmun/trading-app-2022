import React from 'react';
import { Divider, Drawer, IconButton, Typography } from "@mui/material";

interface Props {
  isOpen: boolean;
  handleDrawerToggle: () => void
}

const Drawer_Width = 240;
export const Sidebar: React.FC <Props> = ({isOpen,children, handleDrawerToggle}): JSX.Element => {
  return (
    <div><Drawer
    sx={{
      width:Drawer_Width,
      flexShrink:0,
      " & .MUiIDrawer-paper" :{
        width:Drawer_Width,
        boxSizing:"border-box",
      }
    }}
    variant='persistent'
    anchor='left'
    open={isOpen}
    >
      </Drawer>
    </div>
  )
}
