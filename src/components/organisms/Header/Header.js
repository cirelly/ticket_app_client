import React from 'react';

//import material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {IconButton, makeStyles} from '@material-ui/core';


//logic

import MenuIconButton from "../../atoms/buttons/MenuIconButton"


const useStyles = makeStyles((theme) => ({

  root:{
      
      backgroundColor: 'blue'
  },
  
}));

const Header = ({open, setOpen }) => {

 
  const classes = useStyles();
  const openHandler = ()=>{
    setOpen(!open)
}
  
  return (
    <div>
      <AppBar position="static" className={classes.root} color="transparent" elevation={0}>
        <Toolbar>
            <MenuIconButton onClick={() => openHandler()} />              
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default Header;
