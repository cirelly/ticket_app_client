
import './App.scss';

//import my material UI config
import { lightTheme } from './config/ThemeConfig'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core/'
import { BrowserRouter,Redirect, Route, Switch } from "react-router-dom";
//import my components 
import Queue from './components/screens/Queue/Queue';
import Home from './components/screens/Home/Home';

import Header from './components/organisms/Header/Header'
import Customer from './components/screens/Customer/Customer';


const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    minHeight: "80vh",
    flexDirection: "column",
    marginTop: 10

  },
 
  footer: {
    marginTop: "auto",
    bottom: 0
  }
}));
function App() {

  const classes = useStyles();


  return (
    <ThemeProvider theme={createTheme(lightTheme)}>
      <CssBaseline>
       
        <BrowserRouter>
        
        <Header />
        
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
