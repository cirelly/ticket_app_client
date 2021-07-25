import React, {Fragment} from 'react'

//import material ui components
import {Grid, Box, Typography, makeStyles, IconButton} from '@material-ui/core'
import { Link as Scroll } from "react-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import landingImg from '../../../assets/13202-removebg.png'
const useStyles = makeStyles((theme) => ({
    root: {
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center center",
    //   backgroundSize: "contain",
    //   backgroundAttachment: "sticky",
    //   height: "80vh",
    //   backgroundImage: `url(${FormBackground})`,
    //   width: "100%",
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
        
    //   opacity: 0.6
    },
    img: {
        width: '100%',
        // display: 'block',
        opacity: 0.85
    },
    goDown: {
        textAlign: "center",
        fontSize: "4rem",
      },
  }));


const WelcomeSection = () => {
    const classes = useStyles()

    
    return (
       
        <Grid container spacing={0} justifyContent="center" id="welcome-section">
            <Grid item xs={5}>
                <Box mt={10} ml={10}>
                <Typography color="textSecondary" component="div" variant="h2"> 
                    TicketQApp
                </Typography>
                <Typography component="div" variant="h3">
                    Atencion automatizada
                </Typography>
                <Typography component="div" variant="h4" gutterBottom>
                    Genera tickets, gestiona colas y optimiza procesos para tu negocio
                </Typography>
               
                <Typography component="div" variant="h5">
                        Click y conoce mas sobre esta maravilla
                </Typography>
                <Scroll to="what-section" smooth={true}> 
                    
                    <IconButton>
                    <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                </Scroll>
                </Box>
               
            </Grid>
            <Grid item xs={7}>
                <img 
                    className={classes.img}
                    src={landingImg}
                    alt='TicketQapp'
                />
            
            </Grid>
        </Grid>
        
    )
}

export default WelcomeSection
