'use client'
import { Card, CardContent, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material';
import { FC } from "react";

interface Props {
    title: string; 
    description: string;
    image: string;
}

export const Cards: FC <Props> = ({title, description, image}) => {

    const esMovil = useMediaQuery('(max-width:600px)');
    
  return (
        <Card sx={{boxShadow: 8, border: 1, my: 2}}>
            <CardContent sx={{padding: '20px 0px 0px 10px'}}>
                <Grid container display={'flex'} flexDirection={'row'} 
                 justifyContent={esMovil ? 'center' : ''}>
                    <Grid item sm={4} >
                    <CardMedia 
                        component={'img'}
                        sx={{width: esMovil ? 300 : 180, height: 100, objectFit: 'cover'}}
                        image={image}
                        alt="Frutillar"
                    />
                    </Grid>
                    <Grid item sm={8} >
                <Typography variant="h2" 
                sx={{fontSize: 15, fontWeight: 'bold', my: 1, textAlign: esMovil ? 'center' : ''}}>{title}</Typography>
                <Typography variant="h6" 
                sx={{fontSize: 12, fontStyle: 'italic', textAlign: esMovil ? 'center' : '', padding: esMovil ? '0 1px 0 1px': ''}} >{description}</Typography>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
  )
}
