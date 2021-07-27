import React, {useEffect, useState} from 'react'
import FirstQueue from '../../organisms/Queue/FirstQueue'
import SecondQueue from '../../organisms/Queue/SecondQueue'
import CustomerForm from '../../organisms/Customer/CustomerForm'
import Attended from '../../organisms/Queue/Attended'

import * as customerServices from '../../../services/CustomerServices'
import {Grid, Box, Divider, Typography} from '@material-ui/core'

const Queue = () => {
    

    const [firstQueue, setFirstQueue] = useState('');
    const [secondQueue, setSecondQueue] = useState('');
    const [attended, setAttended] = useState('');
    const [reloadQueue, setReloadQueue] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const getQueues = async () => {   
        setLoading(true)
        const res = await customerServices.getCustomers();
        let firstQueue = []
        let secondQueue = []
        let attendedQueue = []
     
        if(res){

            res.data.data.forEach(queue => {
                if (queue.queueNumber === 1 && !queue.attended){
                    firstQueue.push(queue)
                 
                }else if(queue.queueNumber === 2 && !queue.attended){
                    secondQueue.push(queue)
                  
                }else{
                    attendedQueue.push(queue)
                   
                }
            }) 
        }else{
            console.log("error");
        }
        setLoading(false)
        setReloadQueue(false)
        setFirstQueue(firstQueue)
        setSecondQueue(secondQueue)
        setAttended(attendedQueue)
        
        
  };
 
  useEffect(() => {
    
    getQueues();
    setReloadQueue(false)
  }, [reloadQueue])


  useEffect(() => {
    let interval;
    const queueInterval = () => {
    getQueues();
  
    };
    interval = setInterval(queueInterval, 20000);

    return () => {
      clearInterval(interval);
    };
     
     
  }, [])


    return (
        <div>  
           
                
           <Box mt={5} mb={5}textAlign="center">
                <Typography color="textSecondary" component="div" variant="h2"> 
                    TickQApp <strong style={{color: '#5c5c5c'}} >[DEMO]</strong>
                </Typography>
                
                </Box>
            <Divider light width="100%" style={{marginBottom: 15}} />
            <CustomerForm setReloadQueue={setReloadQueue}/>
            <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="flex-start" >
                <Box width="70%"> 
                <Box mt={5} mb={2} display="flex" alignItems="center">
                <Typography color="textPrimary" component="div" variant="h2"> 
                        Colas
                </Typography>
                
                </Box>  
                  <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            
                            <FirstQueue firstQueue={firstQueue}/>
                            
                        </Grid>
                      
                        <Grid item xs={12} md={6}>
                         
                            <SecondQueue secondQueue={secondQueue}/> 
                            
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Attended attended={attended}/> 
                    </Grid>
                </Box>
            </Box>

           
        </div>
    )
}

export default Queue;