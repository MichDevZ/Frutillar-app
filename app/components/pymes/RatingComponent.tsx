'use client'
import MuiAlert from '@mui/material/Alert';
import { AlertProps, Box, Button, Chip, Grid, Rating, Snackbar, Typography, useMediaQuery } from '@mui/material'
import { FC, useState } from 'react';
import { Modal as MaterialModal,} from '@mui/material'
import { useSession } from 'next-auth/react';
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ErrorOutline } from '@mui/icons-material';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
  pyme: string;
  name: string;
}


export const RatingComponent: FC <Props> = ({pyme, name}) => {


  const esMovil = useMediaQuery('(max-width:600px)');
 
    const {data} = useSession();
    const router = useRouter()
    const user = data?.user.user;

    const [showError, setShowError] = useState(false)
    const [open2, setOpen2] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const [value, setValue] = useState(0);
    const [snackSeverity, setSnackSeverity] = useState<'success' | 'error'>('success');

    const handleOpen2 = () => setOpen2(true);

    const handleClose2 = () => {
      setShowError(false);
      setOpen2(false);
    }

    const handleSnack = (severity: 'success' | 'error') => {
      setSnackSeverity(severity);
      setOpenSnack(true);}

    const handleSnackClose = () => setOpenSnack(false);
    
    
    const sendRating = async () => {
        try {
        const {data} = await axios({
          url: '/api/users/sendRating',
          method: 'POST',
          data: {value, user ,pyme},
        });

        if (data === 'Todo ok'){
          handleClose2();
          handleSnack('success');
          router.refresh();

        }

        if (data === 'Ya has votado') {
          setShowError(true)
          router.refresh();
        }
        } catch (error) {
            return;
      }
      
      

    }


  return (
    <><Button onClick={data?.user.user ? handleOpen2 : () => handleSnack('error')}>| Calificar</Button>
    <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleSnackClose}
      >
         <Alert severity={snackSeverity}>{
          snackSeverity === 'success' 
          ? 'Muchas gracias por calificar'
          : 'Debes iniciar sesión para calificar'
         }</Alert>

      </Snackbar>

    <MaterialModal
          open={open2}
          onClose={handleClose2}
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

        <Grid container display={'flex'} justifyContent={'center'}>

          <Grid item sm={12} textAlign={'center'}>

          <Chip 
           label={`Ya has votado a ${name}`}
           color='error'
           icon={<ErrorOutline />}
           className='fadeIn'
           sx={{display: showError ? 'flex' : 'none'}}
       />


          <Typography variant='h6' my={1}>Califca a {name}!</Typography>

          </Grid>

        <Grid item sm={12} display={'flex'} justifyContent={'center'} mb={2}>
          <Rating precision={0.1} value={value} onChange={ (e, newValue) => setValue(newValue || 0) }  />

        </Grid>

        <Grid item sm={12} display={'flex'} justifyContent={'center'}>
          <Button variant='contained' onClick={sendRating}>Enviar</Button>

        </Grid>
      
        </Grid>

        </Box>


      </MaterialModal></>
  )
}
