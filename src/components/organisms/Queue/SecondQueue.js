import React from 'react'

import { List, ListItemText,ListItemAvatar,ListItem, Avatar, Paper, Box, Typography} from '@material-ui/core'
import {AccountBox} from '@material-ui/icons'
import QueueIcon from '../../../assets/icons8-cola-de-unirse-50.png'
const SecondQueue = ({secondQueue}) => {
    return (

           <Box width="100%" height="100%" display="flex" justifyContent="center" textAlign="center" >
        
        
           <Box width="100%" minWidth={300} >
          
                
           <Box textAlign="start" display="flex" alignItems="center">
                <img src={QueueIcon} alt="secondQueue" />
                <Typography color="textPrimary" variant="h3" component="div">
                        
                        Segunda Cola


                </Typography>

                </Box>
                              
               {
                            secondQueue ?
                            secondQueue.map(queue =>(
                                <Paper key={queue.userId}  elevation={3} width="100%" style={{borderRadius: 30, marginTop:25}} >
                                    
                            <List>
                                <ListItem>
                                    
                                        <ListItemAvatar>
                                            <Avatar>
                                                 <AccountBox />
                                            </Avatar>
                                        </ListItemAvatar>
                               
                                        <ListItemText primary={`Cliente: ${queue.userName} | Ticket No: ${queue.userId} `} secondary={`Hora de atencion: ${ new Intl.DateTimeFormat("en-GB", {
                                                timeStyle: 'short',
                                                dateStyle: 'short',
                                                
                                              }).format(queue.supportTimestamp)}`} />
                                    
                               
                                </ListItem>
                                </List>
                           
                            </Paper>
                            ))
                            : null
                         }
               </Box>
               </Box>
    )
}


export default SecondQueue;