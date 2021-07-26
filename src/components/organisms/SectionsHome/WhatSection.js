import React, {Fragment} from 'react'

import {useHistory} from 'react-router-dom'

//import material ui components
import {Grid, Box, Typography, makeStyles, Card, CardMedia,CardContent, CardActions, Button, Hidden} from '@material-ui/core'

import Logo from '../../../assets/android-chrome-192x192.png'
import What from '../../../assets/photo-of-indifferent-good-looking-woman-with-long-red-hair-spreads-palms-and-looks-clueless-cannot-decide-what-to-do-wears-casual-clothes.jpg'
import How from '../../../assets/two-young-bearded-men-hold-chins-and-look-seriously-at-camera-ponder-about-making-project-work (1).jpg'
import Demo from '../../../assets/surprised-male-face-through-paper-hole-emotional-astonished-young-man-wears-yellow-headgear.jpg'

const useStyles = makeStyles({
    root: {
       
    },
    card:{
        minHeight:355,
        borderRadius: 15
    },
    cardActions:{
        justifyContent: 'center',
        marginTop: 10

    },
    media: {
      height: 180,
     
    },
  });
const WhatSection = () => {


    const classes = useStyles();
    const history = useHistory();
    return (
     
        <Box width="100%" height="100%" display="flex" justifyContent="center"className={classes.root} >
        <Box width="80%" >
     
        <Grid container spacing={4}  id="what-section" style={{marginTop:70, minHeight: 500}}>
            
            <Grid item xs={12}>
                <Box textAlign="center" >
                    <Hidden smDown>
                    <img 
                        src={Logo}
                        style={{height: 140}}
                        alt='TickQApp'
                    />
                    </Hidden>
                    <Typography component="div" variant="h3">
                        TickQApp
                    </Typography>
             
                </Box>
            </Grid>
           
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={10} className={classes.card}>
                        <CardMedia 
                            image={What}
                            className={classes.media}
                        />
                    
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            ¿Qué es esto?
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p">
                            Es una aplicación web que cuenta con un formulario para ingresar usuarios en dos colas de atención al cliente
                            y el tiempo de atención establecido es de dos y tres minutos respectivamente.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card elevation={10} className={classes.card}>
                        <CardMedia 
                            image={How}
                            className={classes.media}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            ¿Cómo funciona?
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p">
                            La magia realmente ocurre detras de este bonita interfaz de usuario, 
                            donde se ejecuta una tarea cada cierto tiempo que calcula y 
                            asigna a los usuarios en la cola que serán atendidos en el menor tiempo.

                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                <Card elevation={10}className={classes.card}>
                        <CardMedia 
                            image={Demo}
                            className={classes.media}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            Demostración en vivo
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p">
                            Haz click en el siguiente botón para probar la aplicación en vivo:
                        </Typography>
                        <CardActions className={classes.cardActions}>
                            <Button variant="contained" onClick={() => history.push('/queue')} size="small" color="secondary">
                                Ver Demo
                            </Button>
                        </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
       
        </Grid>

        </Box>
    </Box>

   
    )
}

export default WhatSection
