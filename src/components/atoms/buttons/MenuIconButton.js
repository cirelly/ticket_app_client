import React from "react";


import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        marginRight: "0"
      }
    },

  }));
  


const MenuIconButton = ({...props}) => {

    const classes = useStyles();

    return (
        <IconButton
            color="inherit"
            aria-label="menu"
            edge="start"
            className={classes.menuButton}
            {...props}
        >
            <MenuIcon />
        </IconButton>
    )


}




export default MenuIconButton;