import { Comments, Comment, PymeSwiper, RatingComponent } from '@/app/components/pymes'
import { getPymeBySlug } from '@/app/database/dbPymes'
import { Instagram, WhatsApp } from '@mui/icons-material'
import {  Grid, Link, Rating, Typography } from '@mui/material/index'

const PymePage = async ({params}: any) => {

  const {pyme} = params;

  const pymes = await getPymeBySlug(pyme)

    const sumRating = pymes[0].rating.reduce((prev, rating) => {
      return prev + rating.rate
  }, 0)

  const finalRating = sumRating / pymes[0].rating.length


  return (
    <Grid container my={4} display={'flex'} justifyContent={'center'} >

      <Grid item sm={12} xs={12}  display={'flex'} justifyContent={'center'}> 
        <Grid item sm={6} xs={12}  >
        <PymeSwiper images={pymes[0].images} />
        </Grid>
      </Grid>

      <Grid item sm={12} textAlign={'center'} my={2}>

        <Typography fontWeight={'bold'} component={'h1'}>{pymes[0].title}</Typography>
        <Grid item sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'} >
          <Rating
          value={finalRating} precision={0.1} readOnly size="small"
          />
         <p style={{fontSize: 13}}>({finalRating || 0})</p>
         <RatingComponent pyme={pymes[0].slug} name={pymes[0].title} />
        </Grid>
        
      </Grid>

      <Grid item sm={12}>

        <Typography component={'h2'} color={'#615d5a'} fontStyle={'italic'} padding={'0px 40px 0 40px'}>
          {pymes[0].description}
        </Typography>

      </Grid>

      <Grid item sm={12} my={5} >
          <Grid item sm={12} textAlign={'center'}>
              <Typography component={'h3'} fontSize={20}>Siguenos en nuestras redes sociales!</Typography>
          </Grid>
          <Grid item sm={12} textAlign={'center'} my={1}>
            <Link href={`http://${pymes[0].whatsapp}`} target={'_blank'}>
              <WhatsApp
              sx={{background: '#25D366', 
                        color: 'white', 
                        borderRadius: '30%', 
                        fontSize: 35,
                        mr: 1
                        }} />
              </Link>
              <Link href={`http://${pymes[0].instagram}`} target={'_blank'}>
              <Instagram sx={{background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', 
                        color: 'white', 
                        borderRadius: '30%', 
                        fontSize: 35, }} />
              </Link>
          </Grid>
      </Grid>

      <Grid item sm={12} xs={12}>
          <Typography fontSize={25} sx={{'@media(max-width: 600px)': {
            fontSize: 20, textAlign: 'center', mb: 1
          }}}>Comentarios</Typography>     
      </Grid>

      <Grid item sm={12} >
        {
          pymes[0].comments.map(comment => (
            <Comment key={comment.comment} comment={comment} />
          ))
        }
          <Comments pyme={pymes[0].slug}  />
      </Grid>

    </Grid>
  )
}

export default PymePage