import React from 'react';

//import material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {IconButton, makeStyles, Typography, Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { Link as Scroll } from "react-scroll";
//logic

import MenuIconButton from "../../atoms/buttons/MenuIconButton"


const useStyles = makeStyles((theme) => ({

  root:{
      flexGrow: 1,
  },
  logo: {
    paddingLeft: 20,
    paddingRight: 100,
    fontWeight: 'bold'

  },
  sectionDesktop: {
    marginLeft: 'auto'
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
      text: "¿Como?",
      url: '/',
      scroll: 'how-section'
  },
    {
        text: "Demo",
        url: "/queue",
        scroll: null
    },
  
]


  return (
    <div>
      <AppBar position="static" className={classes.root} color="transparent" elevation={0}>
        <Toolbar>
          <Typography className={classes.logo} variant="h6" noWrap>
            TickQApp
            
          </Typography>   
          {
            options.map((option, index) => {
              return (
                option.url ?
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
            <IconButton color="inherit">

              <LinkedInIcon />
          
            </IconButton>
            <IconButton color="inherit">
              
              <GitHubIcon />
            
            </IconButton>
          </div>         

        </Toolbar>
      </AppBar>

    </div>
  );
}

export default Header;
