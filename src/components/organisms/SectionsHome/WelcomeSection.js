import React, {Fragment} from 'react'

//import material ui components
import {Grid, Box, Typography, makeStyles, IconButton, Hidden} from '@material-ui/core'
import { Link as Scroll } from "react-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import landingImg from '../../../assets/13202-removebg.png'
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1
    },
    welcomeContainer: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center'
            
          },
    },
    img: {
        width: '100%',
        // display: 'block',
        opacity: 0.85
    },
    goDown: {
        display: 'flex',
        textAlign: "center",
        fontSize: "4rem",
      },
  }));


const WelcomeSection = () => {
    const classes = useStyles()

    
    return (
       
        <Grid container spacing={0} justifyContent="center"  className={classes.root} id="welcome-section">
            <div className={classes.welcomeContainer}>
            <Grid item xs={12} md={5}>
                <Box mt={10} ml={10} mr={10}>
                <Typography color="textSecondary" component="div" variant="h2"> 
                    TickQApp
                </Typography>
                <Typography component="div" variant="h3">
                   Solucionamos colisiones
                </Typography>
                <Typography component="div" variant="h4" gutterBottom>
                    Genera tickets, gestiona colas y optimiza procesos para tu negocio
                </Typography>
                <Box mt={5} textAlign="center">
                <Typography component="div" variant="h5">
                        Click y conoce mas sobre esta maravilla...
                </Typography>
                </Box>
                <Scroll to="what-section" smooth={true}> 
                    <Box textAlign="center">
                    <IconButton>
                    <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                    </Box>
                   
                </Scroll>
                </Box>
               
            </Grid>
           
            <Grid item xs={12} md={7}>
            <Hidden smDown>
                <img 
                    className={classes.img}
                    src={landingImg}
                    alt='TicketQapp'
                />
            </Hidden>
            </Grid>
            
            </div>
        </Grid>
        
    )
}

export default WelcomeSection
