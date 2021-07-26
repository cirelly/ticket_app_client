import React, {useState,useEffect} from 'react'
import {Box, Typography, Grid, Paper, List, ListItemText, ListItemAvatar, ListItem, Avatar} from '@material-ui/core'
import {AccountBox} from '@material-ui/icons'
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const Attended = ({attended}) => {

  

    
    return (
        <Box width="100%" height="100%" display="flex" justifyContent="center" textAlign="start" >
        
        
                <Box width="100%" mt={5} minWidth={300} >
                <Typography color="textPrimary" component="div" variant="h3"> 
                        Atendidos
                </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            
                        {attended ? attended.map(queue =>
                            (
                            queue.queueNumber === 1 ?
                                <Paper key={queue.userId} elevation={3} width="100%" style={{borderRadius: 30, marginTop:25}} >
                                    <List>
                                        <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AccountBox />
                                            </Avatar>
                                        </ListItemAvatar>
                                    
                                        <ListItemText 
                                            primary={`Cliente: ${queue.userName} | Ticket No: ${queue.userId} `} 
                                            secondary={`Hora de atencion: ${ new Intl.DateTimeFormat("en-GB", {
                                                timeStyle: 'short',
                                                dateStyle: 'short',
                                                
                                              }).format(queue.supportTimestamp)}`} 
                                            />
                                            <CheckBoxIcon fontSize="large" style={{ color: '#14e070'}} />
                                        </ListItem>
                                    </List>
                                 </Paper>
                            : null
                            )) 
                        : null
                        }
                        </Grid>
                      
                        <Grid item xs={12} md={6}>
                        {attended ? attended.map(queue =>
                            (
                            queue.queueNumber === 2 ?
                                <Paper key={queue.userId} elevation={3} width="100%" style={{borderRadius: 30, marginTop:25}} >
                                    <List>
                                        <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AccountBox />
                                            </Avatar>
                                        </ListItemAvatar>
                                    
                                        <ListItemText 
                                            primary={`Cliente: ${queue.userName} | Ticket No: ${queue.userId} `} 
                                            secondary={`Hora de atencion:${ new Intl.DateTimeFormat("en-GB", {
                                                timeStyle: 'short',
                                                dateStyle: 'short',
                                                
                                              }).format(queue.supportTimestamp)}`} 
                                            />
                                            <CheckBoxIcon fontSize="large" style={{ color: '#14e070'}} />
                                        </ListItem>
                                    </List>
                                 </Paper>
                            : null
                            )) 
                        : null
                        }
                        </Grid>
                    </Grid>
                       
                
                </Box>
            </Box>
    )
}

export default Attended
