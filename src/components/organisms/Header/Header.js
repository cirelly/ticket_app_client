import React,{useState} from 'react';

//import material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {IconButton, makeStyles,  Button} from '@material-ui/core';
import {useHistory, useLocation} from 'react-router-dom'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { Link as Scroll } from "react-scroll";
//logic
import LogoAppBar from '../../molecules/logoAppBar/LogoAppBar'



const useStyles = makeStyles((theme) => ({

  root:{
      flexGrow: 1,
      paddingBottom:15
  },
  logo: {
    paddingLeft: 20,
    paddingRight: 100,
    fontWeight: 'bold'

  },

  img:{
    display: "block",
    height: "40px",
  },
  sectionDesktop: {
    marginLeft: 'auto',

  },
  title: {
        
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
}));

const Header = () => {

 
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();


  const options = [
    {

        text: "Inicio",
        url: '/',
        scroll: 'welcome-section'
    },
    {
        text: "¿Qué es esto?",
        url: '/',
        scroll: 'what-section'
    },
    {
      text: "¿Cómo?",
      url: '/',
      scroll: 'how-section'
  },
    {
        text: "Demo",
        url: "/queue",
        scroll: null,
       
    },
  
]


  return (
    <div>
      <AppBar position="fixed" className={classes.root} color="transparent" elevation={0}>
        <Toolbar>
          
            <LogoAppBar />
        
          {
            options.map((option, index) => {
              return (
                (option.url && location.pathname !=='/' && location.pathname === '/queue') || !option.scroll ?
              
                  <Button key={index} onClick={() => history.push(option.url)}>
                          {option.text}
                  </Button>  

                  :

                  <Scroll key={index} to={option.scroll} smooth={true}>
                    <Button>
                      {option.text}
                    </Button>
                  </Scroll>
                )
                
            })
          }
    
        
          <div className={classes.sectionDesktop}>
            <IconButton onClick={() => window.open('https://www.linkedin.com/in/bryancirelly/', '_blank')}  color="inherit">

              <LinkedInIcon />
          
            </IconButton>
            <IconButton onClick={() => window.open('https://github.com/cirelly', '_blank')} color="inherit">
              
              <GitHubIcon />
            
            </IconButton>
          </div>         

        </Toolbar>
      </AppBar>

    </div>
  );
}

export default Header;
