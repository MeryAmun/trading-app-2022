import React from 'react';
import { Divider, Drawer, IconButton, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { padding } from '@mui/system';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface Props {
  isOpen: boolean;
  //isDrawerOpen:boolean;
  handleDrawerToggle: () => void
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display:'flex',
  alignItems:'center',
  padding:theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent:'flex-end'
}))

const LogoStyled = styled('div')(({ theme }) => ({
  display:'flex',
  alignItems:'center',
  padding:theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent:'flex-start'
}))
const Drawer_Width = 240;
export const Sidebar: React.FC <Props> = ({isOpen,children, handleDrawerToggle}): JSX.Element => {
  const theme = useTheme()
  return (
    <>
    <Drawer
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
      <DrawerHeader>
      <LogoStyled>
        <Typography variant='subtitle2' component='div' align='left'>
          Repo Logo
        </Typography>
      </LogoStyled>
      <IconButton onClick={handleDrawerToggle}>
        {theme.direction  === "ltr" ? (<ChevronLeft/>) : (<ChevronRight/>) }
      </IconButton>
      </DrawerHeader>
      <Divider/>
      {children}
      </Drawer>
    </>
  )
}
