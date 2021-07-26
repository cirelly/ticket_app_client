import React from 'react'

import {Box,Grid, Typography, Hidden, makeStyles} from '@material-ui/core'
import JsIcon from '../../../assets/icons8-javascript-144.png'
import NodeJsIcon from '../../../assets/icons8-nodejs-96.png'
import ReactJsIcon from '../../../assets/icons8-reaccionar-80.png'
import MaterialUiIcon from '../../../assets/icons8-material-ui-96.png'
import MongoIcon from '../../../assets/icons8-mongodb-96.png'
import FrontendIcon from '../../../assets/icons8-código-fuente-96.png'
import BackendIcon from '../../../assets/icons8-backend-development-96.png'
import ExpressIcon from '../../../assets/express.png'
const useStyles = makeStyles((theme) => ({

    avatar: {
      height: 90,
      width: 100,
        
    },
    iconMedium:{
        height: 50,
        width: 50,
          
    }
  }));

const HowSection = () => {

    const classes = useStyles()

    return (
        <Box width="100%" minHeight={600} mt={10} display="flex" justifyContent="center" justifyItems="center" textAlign="center">
            <Box width="80%">
            <Typography component="div" variant="h3">
                    ¿Qué hay detrás?
                </Typography>
                <Typography component="div" variant="h4">
                    Pues, las siguientes tecnologías permitieron realizar esta obra de arte
                </Typography>
                <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center"  id="how-section">
                   
                <Grid item xs={12}>
                        
                        <img className={classes.avatar} src={JsIcon} alt="JavaScript" />
             
                       <Typography component="div" variant="h3">
                           JavaScript 
                       </Typography> 
                     
                   </Grid>
                   
                    <Grid item xs={6}>
                        <Hidden smDown>
                            <img className={classes.iconMedium} src={BackendIcon} alt="Backend" />
                                <Typography component="div" variant="h3">
                                    Backend 
                                </Typography> 
                        </Hidden>
                    </Grid>
                
                    <Grid item xs={6}>
                        <Hidden smDown>
                            <img className={classes.iconMedium} src={FrontendIcon} alt="Frontend" />
                            <Typography component="div" variant="h3">
                                Frontend 
                            </Typography> 
                        </Hidden>
                    </Grid>

                   
                    <Grid item xs={12} sm={6} md={3}>

                        <img className={classes.avatar} src={NodeJsIcon} alt="NodeJs" />
                        <Typography component="div" variant="h3">
                            Node JS    
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>

                        <img className={classes.avatar} src={ExpressIcon} alt="ExpressJs" />
                        <Typography component="div" variant="h3">
                            Express JS    
                        </Typography>     
        
                    </Grid> 

                    
                    <Grid item xs={12} sm={6} md={3}>

                        <img className={classes.avatar} src={ReactJsIcon} alt="ReactJs" />
                        <Typography component="div" variant="h3">
                            React JS    
                        </Typography>    
                
                    </Grid>

                    <Grid  item xs={12} sm={6} md={3}>

                        <img className={classes.avatar} src={MaterialUiIcon} alt="MaterialUI" />
                        <Typography component="div" variant="h3">
                            Material UI  
                        </Typography>    
                    
                    </Grid> 
                    

                    <Grid  item xs={12}>
                        
                        <img className={classes.avatar} src={MongoIcon} alt="MongoDb" />
                        <Typography component="div" variant="h3">
                           MongoDB
                        </Typography>    
                    
                    </Grid>             
                    
                </Grid>
            </Box>
        </Box>
    )
}

export default HowSection
