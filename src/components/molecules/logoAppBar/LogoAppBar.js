import React from 'react'
import {Typography, makeStyles, ButtonBase} from '@material-ui/core'
import Logo from '../../../assets/android-chrome-192x192.png'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({

    root:{
        flexGrow: 0.5,
        display: 'flex',
        alignItems: 'center'
    },
    logocontainer: {
        
    },
    logo: {
      
      paddingLeft: 5,
      fontWeight: 'bold'
  
    },
    img:{
      display: "block",
      height: "40px",
   
    },

    
  }));


const LogoAppBar = () => {

    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
          <ButtonBase onClick={() => history.push('/')}>
            <img src={Logo} className={classes.img} alt="TicketQApp" />
            <Typography className={classes.logo} variant="h6" noWrap>
              TickQApp
              
            </Typography> 
          </ButtonBase>
        </div>
    )
}

export default LogoAppBar
