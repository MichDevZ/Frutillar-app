'use client'
import { ErrorOutline } from '@mui/icons-material';
import { Box, Button, Chip, Grid, Link, Snackbar, TextField, Typography, useMediaQuery } from '@mui/material'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

type FormData = {
    user: string,
    password: string
    confirmPassword: string,
}


const registerPage = () => {

    const esMovil = useMediaQuery('(max-width:600px)');

    const router = useRouter();
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const {register, handleSubmit, formState: {errors}  } = useForm<FormData>();
    const [showError, setShowError] = useState(false);
    const [errorType , setErrorType] = useState('');

    const handleSnackClose = () => setOpenSnackBar(false);

    const handleError = (error: string) => {
        setErrorType(error)
        setShowError(true)

    }

    const onRegisterForm = async({user, password, confirmPassword}:FormData) => {
         try {
            const {data} = await axios({
                url: '/api/users/registerUser',
                method: 'POST',
                data: {user, password, confirmPassword},
                headers: {
                    'Content-Type': 'multipart/form-data' 
                  }
            })

        if (data === 'Contraseña no coincide') {
            handleError('Contraseña')
            return;
        }

        if (data === 'Nombre de usuario ya registrado') {
            handleError('Usuario')
            return;
        }

        if (data === 'Todo ok') {
            setOpenSnackBar(true)
            setTimeout(() => {
                router.back();

            }, 3000)
        }

         } catch (error) {
            
         }   

    }


  return (
    <form onSubmit={handleSubmit(onRegisterForm)}>
    <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleSnackClose}
      >
         <Alert severity={'success'}>Registrado correctamente!</Alert>

      </Snackbar>
    <Box sx={{width: esMovil ? 200 : 350, padding: esMovil ? '50px 90px'  :  '30px 130px'}}>
        <Grid container >
            <Grid item sm={12}>
                <Chip 
                    label= {errorType === 'Contraseña' ? 'La contraseña no coincide' : 'El nombre de usuario ya esta en uso'}
                    color='error'
                    icon={<ErrorOutline />}
                    className='fadeIn'
                    sx={{display: showError ? 'flex' : 'none', mb: 1 , ml: esMovil ? -4 : '', width: esMovil ? 300 : ''}}
                />

            </Grid>
            <Grid item xs={12} textAlign={'center'} mb={2}>
                <Typography variant="h5" component='h1'>Crear Cuenta</Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
                <TextField 
                label='Nombre de usuario' 
                variant="filled" 
                fullWidth
                {...register('user', {
                    required: 'Este campo es requerido',
                    minLength: {value: 2, message: 'Minimo 2 caracteres'}
                })}
                error={!!errors.user}
                helperText={errors.user?.message} />
            </Grid>

            <Grid item xs={12} sm={12}>
                <TextField 
                type="password"
                label='Contraseña' 
                variant="filled" 
                fullWidth 
                {...register('password', {
                    required: 'Este campo es requerido',
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
                />
            </Grid>

            <Grid item xs={12} sm={12}>
                <TextField 
                type="password"
                label='Repita contraseña' 
                variant="filled" 
                fullWidth 
                {...register('confirmPassword', {
                    required: 'Este campo es requerido',
                })}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                />
            </Grid>

            <Grid item xs={12}>
                <Button
                type="submit" 
                color='secondary'
                variant='contained' 
                size='large' 
                fullWidth>
                    Registrarse
                </Button>
            </Grid>

            
        </Grid>
        
    </Box>
    </form>
  )
}

export default registerPage