import React from 'react'
import { AppBar,Toolbar, Typography, IconButton, Switch as ThemeSwitch} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface Props {
  isDarkMode: boolean;
  isDrawerOpen:boolean
    handleDrawerToggle: () => void;
    onThemeChange: () => void
}
export const AppBarComponent: React.FC <Props> = ({handleDrawerToggle, isDrawerOpen,isDarkMode, onThemeChange}):JSX.Element => {

   
  return (
    <div>
        <AppBar position='static' variant='elevation'>
            <Toolbar variant='dense'>
                <IconButton color='inherit' onClick={handleDrawerToggle} edge='start' sx={{mr: 2, ...(isDrawerOpen && {display: "none"})}}>
                  <MenuIcon/>
                </IconButton>
    <Typography variant='subtitle1' component='div' sx={{ flexGrow: 1 }}>
        React Repo Trading App
    </Typography>
    <ThemeSwitch size='small' onChange={onThemeChange}/>
            </Toolbar>
        </AppBar>
    </div>
  )
}
