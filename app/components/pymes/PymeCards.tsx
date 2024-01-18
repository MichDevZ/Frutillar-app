import { Irating } from "@/app/interfaces";
import { Instagram, WhatsApp } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material"
import Link from "next/link";
import { FC } from 'react';

interface Props {
    title: string;
    description: string;
    image: string;
    rating: Irating[];
    instagram: string;
    whatsapp: string;
    slug: string;
    category: string;
}

export const PymeCards: FC <Props> = ({title, description, image, rating, instagram, whatsapp, slug, category}) => {

    const sumRating = rating.reduce((prev, rating) => {
        return prev + rating.rate
    }, 0)

    const finalRating = sumRating / rating.length



  return (
<Card sx={{boxShadow: 8, border: 1, my: 2}} >
            <CardContent sx={{padding: '20px 0px 0px 10px', '@media(max-width: 600px)':{
                padding: ''
            } }}>
                <Grid container display={'flex'} flexDirection={'row'} sx={{'@media(max-width: 600px)':{
                    justifyContent: 'center'
                }}} >
                    <Grid item sm={4}>
                    <CardMedia 
                        component={'img'}
                        sx={{width: 180, height: 120, objectFit: 'fill', '@media(max-width: 600px)': {
                            width: 200
                        }}}
                        image={image}
                        alt="Frutillar"
                    />
                    </Grid>
                    <Grid item sm={8} sx={{'@media(max-width: 600px)':{
                        textAlign: 'center'
                    }}} >
                <Link href={`${category}/${slug}`} style={{color: 'black', textDecoration: 'none'}}>
                <Typography variant="h2" sx={{fontSize: 15, fontWeight: 'bold', my: 1}}>{title}</Typography>
                </Link>
                <Typography
                 variant="h6" 
                 sx={{fontSize: 12, fontStyle: 'italic', 
                 '@media(max-width: 600px)': {
                    padding: '0 0px 0px 3px'
                 }}}>
                    {description.length > 140 ? description.substring(0, 140) + '...'  : description }
                </Typography>
                <Box display={'flex'} justifyContent={'space-between'} >

                    <Box display={'flex'} 
                    justifyContent={'start'} 
                    alignItems={'center'}>
                        <Rating value={finalRating} precision={0.1} readOnly size="small" /> 
                        <p style={{fontSize: 13}}>({finalRating || 0})</p>
                    </Box>
                <Box>
                    <Link href={`https://${instagram}`} target="_blank">
                        <Instagram  
                        sx={{
                        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', 
                        color: 'white', 
                        borderRadius: '30%', 
                        fontSize: 30, 
                        my: 2,
                        mr: 0.5
                        }} />
                    </Link>

                    <Link href={`https://${whatsapp}`} target="_blank">
                        <WhatsApp  
                        sx={{
                        background: '#25D366', 
                        color: 'white', 
                        borderRadius: '30%', 
                        fontSize: 30, 
                        my: 2,
                        mr: 2
                        }} />
                    </Link>
                    </Box>
               
                </Box>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
  )
}
