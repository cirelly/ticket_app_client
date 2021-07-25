
import './App.scss';
import React, {useState} from 'react'
//import my material UI config
import { lightTheme } from './config/ThemeConfig'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core/'
import { BrowserRouter,Redirect, Route, Switch } from "react-router-dom";
import clsx from 'clsx'
//import my components 
import Queue from './components/screens/Queue/Queue';
import Home from './components/screens/Home/Home';
import SideBar from './components/organisms/SideBar/SideBar'
import Header from './components/organisms/Header/Header'
import Customer from './components/screens/Customer/Customer';

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    minHeight: "80vh",
    flexDirection: "column",
    // marginLeft: drawerWidth,
    // marginRight: drawerWidth
  },
 
  footer: {
    marginTop: "auto",
    bottom: 0
  }
}));
function App() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={createTheme(lightTheme)}>
      <CssBaseline>
       
        <BrowserRouter>
        
        <Header open={open} setOpen={setOpen}/>
        <SideBar open={open} setOpen={setOpen} />
        <div className={classes.content}>
       
            <Switch>
         
              <Route path="/" exact component={Home}/>
              <Route path="/queue" exact component={Queue} />
              <Route path="/customer" exact component={Customer} />

              <Redirect to="/" />
              

            </Switch>
            
        </div>
        </BrowserRouter>
       
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
