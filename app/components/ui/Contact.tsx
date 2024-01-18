
import { Card, CardContent, Grid, Typography } from '@mui/material/index'
import { WhatsApp } from "@mui/icons-material"
import Link from 'next/link'
import { FC } from "react"

export const Contact: FC = () => {
  return (
    <Card>
    <CardContent>
        <Grid container display={'flex'} justifyContent={'center'}>
          <Grid item sm={12} textAlign={'center'} >
              <Typography fontWeight={'bold'} >Te interesa formar parte? Contactame!</Typography>
          </Grid>
          <Grid item sm={12} xs={12} justifyContent={'center'} display={'flex'} >
            <Link href={''}>
              <WhatsApp  sx={{color: '#25D366', fontSize: 50, my: 1}} />
            </Link>

          </Grid>
        </Grid>
    </CardContent>
  </Card>
  )
}
