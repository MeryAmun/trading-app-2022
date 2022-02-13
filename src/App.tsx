import React, {useState} from 'react';
import './App.css';
import { createTheme, ThemeProvider, CssBaseline, TextField } from "@mui/material";
import { AppBarComponent } from './components/index';
import { Sidebar } from "./components/index";
import { Menu } from './components/Menu/Menu';
import { Routes } from './routes';

export const  App: React.FC = ():JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">(("dark"));
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false)

  const theme = createTheme({
palette:{
  mode:themeMode
},
typography:{
  fontSize:14
}
  })

  const handleDrawerToggle = React.useCallback(() => {
setSidebarToggle(!sidebarToggle)
  }, [sidebarToggle]);


  const onThemeChange = React.useCallback(() => {
   setThemeMode(themeMode === "dark" ? "light" : "dark")
      }, [themeMode])

     
  return (
    <ThemeProvider theme={theme}> 
    <CssBaseline/>
    <AppBarComponent handleDrawerToggle={handleDrawerToggle} onThemeChange={onThemeChange}
    isDarkMode={themeMode === "dark"}
    isDrawerOpen={sidebarToggle}/>
    <Sidebar isOpen={sidebarToggle} handleDrawerToggle={handleDrawerToggle} 
    children = {<Menu links={Routes}/>} />
   </ThemeProvider>
  );
}

export default App;
