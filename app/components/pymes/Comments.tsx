'use client'
import { ErrorOutline } from '@mui/icons-material';
import { Button, Grid, TextField, Typography, Modal as MaterialModal, Box, Card, Chip, useMediaQuery, } from '@mui/material'
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {  FC, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  username: string,
  password: string
}

interface Props {
  pyme: string;
}


export const Comments: FC <Props> = ({pyme}) => {

  const esMovil = useMediaQuery('(max-width:600px)');

  const router = useRouter();
  const {data} = useSession();
  const user = data?.user.user;

  const [showErrorComment, setShowErrorComment] = useState(false);
  const {register, handleSubmit, formState: {errors}  } = useForm<FormData>();
  const [showError, setShowError] = useState(false)
  const [open, setOpen] = useState(false);
  const [commentToSend, setCommentToSend] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const onLoginUser = async({username, password}: FormData) => {

   const result = await signIn ('credentials', { username, password, redirect: false})

   setShowError(false)
   if(!result?.error) {
    handleClose();
   }

   if (result?.error) {
    setShowError(true)
   }
} 

const sendComment = async () => {

  try {
    const {data} = await axios({
      url: '/api/users/sendComment',
      method: 'POST',
      data: {commentToSend, user, pyme },
    });

    if (data === 'Todo ok') {
      router.refresh();
      setCommentToSend('')
      setShowErrorComment(false)

    }

    if (data === 'Al menos 6 carácteres') {
      setShowErrorComment(true)
    }
  } catch (error) {
      return;
  } 

}



  return (
    <>
    <div>
          <Grid container alignItems={'center'} direction={'column'}> 
          <TextField fullWidth placeholder='Escribe tu comentario' value={commentToSend}
           onChange={e => setCommentToSend(e.target.value)} ></TextField>
          <Button variant='contained' 
          onClick={data?.user.user ? sendComment : handleOpen} 
          sx={{my: 1, textTransform: 'none'}} >Comentar</Button>
          <Chip 
              label='El comentario debe tener al menos 6 carácteres'
              color='error'
              icon={<ErrorOutline />}
              className='fadeIn'
              sx={{display: showErrorComment ? 'flex' : 'none', mb: 1}}
            />
            <MaterialModal 
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
          <Box sx={{position: 'absolute' as 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',   
                  width: esMovil ? 200 :  400,
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  p: 4}}>

          <form onSubmit={handleSubmit(onLoginUser)} noValidate>
            <Grid container>
              <Grid item sm={12}>
              <Typography variant="h1" component='h1' fontSize={'20px'} mb={2}>Tienes que ingresar para comentar</Typography>
              </Grid>

              <Chip 
                  label='No reconocemos ese usuario / contraseña'
                  color='error'
                  icon={<ErrorOutline />}
                  className='fadeIn'
                  sx={{display: showError ? 'flex' : 'none', mb: 1}}
                />
              
              <Grid item sm={12}>
                <TextField 
                label='Usuario'
                variant="filled" 
                fullWidth
                {...register('username' , {
                  required: 'Este campo es requerido',
               })}
               error={!!errors.username}
               helperText={errors.username?.message}
                />
              </Grid>

              <Grid item sm={12}>
                <TextField 
                type='password'
                label='Contraseña'
                variant="filled" 
                fullWidth
                {...register('password', {
                  required: 'Este campo es requerido',
                  minLength: {value: 6, message: 'Minimo 6 caracteres'}
              })} 
              error={!!errors.password}
              helperText={errors.password?.message}
                />
              </Grid>


              <Grid item xs={12}>
                    <Button 
                    variant='contained'
                    type = 'submit'
                    color ='secondary' 
                    size ='large' 
                    fullWidth>
                        Ingresar
                    </Button>
              </Grid>


              <Grid item xs={12} my={1} textAlign={'end'}>
                    <Link href={'../register'} style={{fontSize: esMovil ? 14 : ''}}>
                        ¿No tienes cuenta? Registrate!
                    </Link>
              </Grid>

            </Grid>

            </form>
            
          </Box>

          </MaterialModal>
          </Grid>

        </div>  
</>
  )
}
