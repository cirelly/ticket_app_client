import React from 'react'
import {Grid, Box, Typography, Button} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import CommonInput from '../../atoms/inputs/CommonInput'
import validationRegister from '../../../utils/validationRegister'
import * as customerServices from '../../../services/CustomerServices'
const CustomerForm = () => {



    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        let user ={
            userId: data.userId,
            userName: data.userName
            
        }
        console.log(user);
        customerServices.addCustomer(user)
    }

    return (
        
            <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="flex-start" >
        
        
                <Box width="70%" minWidth={300} >
        
        
                    <form onSubmit={handleSubmit(onSubmit)}  >
        
        
                        <Grid container spacing={4} justify="center" alignItems="center" >
        
        
                            <Grid item xs={12} container justify="flex-start">
        
                                <Typography color="text.primary" variant="h3" component="div">
        
                                    <Box id="titleRegisterForm" textAlign="center">
        
                                        Registrar nuevo cliente
        
                                    </Box>
        
                                </Typography>
        
                            </Grid>
        
        
                            <Grid item sm={6} xs={12}>
        
                                <CommonInput
                                    label="Nombre"
                                    name="userName"
                                    inputRef={register(validationRegister({ required: true, maxLength: 128, minLength: 3 }))}
                                    error={!!errors.userName}
                                    helperText={errors.userName?.message}
                                />
        
                            </Grid>
        
        
                            <Grid item sm={6} xs={12}>
        
                                <CommonInput
                                    label="Numero de ticket"
                                    name="userId"
                                    inputRef={register(validationRegister({ required: true, maxLength: 30, minLength: 1 }))}
                                    error={!!errors.userId}
                                    helperText={errors.userId?.message}
                                />
        
                            </Grid>
        
        
                            <Grid item xs={12} justify="flex-end" container >
        
                                <Button type="submit" variant="contained" color="secondary" size="large" >
        
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
