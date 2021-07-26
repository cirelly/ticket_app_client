import React from 'react'
import {Grid, Box, Typography, Button, makeStyles} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import CommonInput from '../../atoms/inputs/CommonInput'
import validationRegister from '../../../utils/validationRegister'
import * as customerServices from '../../../services/CustomerServices'




const useStyles = makeStyles((theme) => ({

   
    buttonContainer: {
          
      
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        textAlign: 'center'
      },
    },
    
  }));
const CustomerForm = ({setReloadQueue}) => {

    const classes = useStyles()

    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = async  data => {
      
        let user ={
            userId: data.userId,
            userName: data.userName
            
        }
        
        
          await customerServices.addCustomer(user)
            setReloadQueue(true)
            reset()
        
        
        
    }

    return (
        
            <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="flex-start" >
        
        
                <Box width="70%" minWidth={300} >
        
        
                    <form onSubmit={handleSubmit(onSubmit)}  >
        
        
                        <Grid container spacing={4} justify="center" alignItems="center" >
        
        
                            <Grid item xs={12} container justify="flex-start">
        
                                <Typography color="textPrimary" variant="h3" component="div">
        
                                    <Box id="titleRegisterForm" textAlign="center">
        
                                        Ingresar Usuario
        
                                    </Box>
        
                                </Typography>
        
                            </Grid>

                            <Grid item sm={4} xs={12}>
        
                                <CommonInput
                                    
                                    type="number"
                                    color="primary"
                                    label="No de ticket"
                                    name="userId"
                                    inputRef={register(validationRegister({ required: true, maxLength: 30, minLength: 1 }))}
                                    error={!!errors.userId}
                                    helperText={errors.userId?.message}
                                />
        
                            </Grid>
        
        
                            <Grid item sm={6} xs={12}>
        
                                <CommonInput
                                    
                                    label="Nombre"
                                    name="userName"
                                    inputRef={register(validationRegister({ required: true, maxLength: 128, minLength: 6 }))}
                                    error={!!errors.userName}
                                    helperText={errors.userName?.message}
                                />
        
                            </Grid>
        
        
        
        
                            <Grid item xs={12} sm={2} className={classes.buttonContainer} >

                                <Button  type="submit" variant="contained" color="secondary" size="medium" >
        
                                    Ingresar
        
                                </Button>
                              
                            </Grid>
        
        
                        </Grid>
        
        
                    </form >
        
        
                </Box>
        
        
            </Box>
    )
}




export default CustomerForm
