import React, {useState} from 'react';
import './App.css';
import { createTheme, ThemeProvider, CssBaseline, TextField } from "@mui/material";
import { AppBarComponent } from './components/index';
import { Sidebar } from "./components/index";
import { Menu } from './components/Menu/Menu';
import { BLOTTER, MAIN, routes, TRADE_TICKET } from './routes';
import { Blotter, Dashboard, Tradeticket } from './Features';
import { Routes, Route, useNavigate} from 'react-router-dom'


export const  App: React.FC = ():JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">(("dark"));
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false)
  const navigate = useNavigate()

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

      const menuClickHandler = React.useCallback((link) => {
     navigate(link)
     setSidebarToggle(!sidebarToggle)
           }, [navigate, sidebarToggle])
     
  return (
    <ThemeProvider theme={theme}> 
    <CssBaseline/>
    <AppBarComponent handleDrawerToggle={handleDrawerToggle} onThemeChange={onThemeChange}
    isDarkMode={themeMode === "dark"}
    isDrawerOpen={sidebarToggle}/>
    <Sidebar isOpen={sidebarToggle} handleDrawerToggle={handleDrawerToggle} 
    children = {<Menu links={routes} menuClickHandler={menuClickHandler}/>} />
   
      <Routes>
      <Route path={MAIN} element={ <Dashboard/>}/>
      <Route  path = {BLOTTER} element={<Blotter/>}/>
      <Route  path = {TRADE_TICKET}  element={ <Tradeticket/>}/>
      </Routes>
    
   </ThemeProvider>
  );
}

export default App;
