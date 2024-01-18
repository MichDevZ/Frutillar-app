'use client'
import { AppBar, Box, Button, Menu, MenuItem, PaperProps, Toolbar, useMediaQuery } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"



export const Main = () => {

  const esMovil = useMediaQuery('(max-width:600px)');

    const menuPaperProps: PaperProps = {
        style: {
          backgroundColor: '#cf5a46',
          maxHeight: esMovil ? 250 : '100%'
        },
      };

    const [anchorElFood, setAnchorElFood] = useState<null | HTMLElement>(null);
    const [anchorServices, setanchorServices] = useState<null | HTMLElement>(null);
    
    const [anchorElLodging, setAnchorElLodging] = useState<null | HTMLElement>(null);

    const handleClickFood = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElFood(event.currentTarget);
      };
      
      const handleClickLodging = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElLodging(event.currentTarget);
      };

      const handleClickServices = (event: React.MouseEvent<HTMLButtonElement>) => {
        setanchorServices(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorElFood(null);
        setAnchorElLodging(null);
        setanchorServices(null)
      };


  return (
    <Box>
     <Image 
     layout="responsive"
     width={600} 
     height={300} 
     src={'https://cdn.viajala.com/img/blog/teatro-del-lago-cl_M.jpeg?uMpyyY_03jtXJvNZCDe0mef33j70JGn2'} 
     alt={"Frutillar"}     
     />
     <AppBar position="static" >
        <Toolbar variant="dense" 
        sx={{background: '#912714', my: -1, overflowX: esMovil ?  'auto' : '', maxWidth: esMovil ? 400 : 600}} >
      
                <Button 
                onClick={handleClickFood}
                aria-controls="food-menu"
                sx={{flexGrow: 1,
                textTransform: 'none',
                color: 'white', 
                fontSize: esMovil ? 10 : 14,
                mr: esMovil ? 2 : 1, 
                fontStyle: 'italic', 
                fontWeight: "bold",
                border: '1px solid',
                '&:hover': {
                  background: 'rgba(255, 256, 237, 0.1)',
                  transition: 'all 0.2s ease'
                }
                }}>
                    Comida
                </Button>

                <Menu 
                    id="food-menu"
                    anchorEl={anchorElFood}
                    keepMounted
                    open={Boolean(anchorElFood)}
                    onClose={handleClose}
                    PaperProps={menuPaperProps}
                >
                  <Link href={"/sushi"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15}} >Sushi</MenuItem>
                  </Link>
                  <Link href={"/hamburguesas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15}} >Hamburguesas</MenuItem>
                  </Link>

                  <Link href={"/papas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15}} >Papas fritas</MenuItem>
                  </Link>

                      <Link href={"/pizzas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15}} >Pizzas</MenuItem>
                  </Link>
                  <Link href={"/completos"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15}} >Completos</MenuItem>
                  </Link>
                  <Link href={"/picadas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15}} >Picadas</MenuItem>
                  </Link>
                  <Link href={"/empanadas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15}} >Empanadas</MenuItem>
                  </Link>
                    
                </Menu>

                <Button 
                onClick={handleClickLodging}
                aria-controls="lodging-menu"
                sx={{flexGrow: 1,
                textTransform: 'none',
                color: 'white',  
                fontSize: esMovil ? 10 : 14,
                mr: esMovil ? 2 : 1, 
                fontStyle: 'italic', 
                fontWeight: "bold",
                border: '1px solid',
                '&:hover': {
                  background: 'rgba(255, 256, 237, 0.1)',
                  transition: 'all 0.2s ease'
                }}}
                >
                    Hospedaje
                </Button>

                <Menu 
                    id="lodging-menu"
                    anchorEl={anchorElLodging}
                    keepMounted
                    open={Boolean(anchorElLodging)}
                    onClose={handleClose}
                    PaperProps={menuPaperProps}
                >

                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15 }} >Cabañas</MenuItem>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15 }} >Hospedaje</MenuItem>

                </Menu>

                <Button sx={{
                  textTransform: 'none',
                  flexGrow: 1, 
                  color: 'white', 
                  fontSize: esMovil ? 10 : 14,
                  mr: esMovil ? 2 : 1, 
                  fontStyle: 'italic', 
                  fontWeight: "bold",
                  border: '1px solid',
                  '&:hover': {
                    background: 'rgba(255, 256, 237, 0.1)',
                    transition: 'all 0.2s ease'
                  }}}>
                    Uber
                </Button>

              <Link href={"/ropa"}>
                <Button sx={{
                  whiteSpace: 'nowrap',
                  textTransform: 'none',
                  flexGrow: 1, 
                  color: 'white', 
                  fontSize: esMovil ? 10 : 14,
                  mr: esMovil ? 2 : 1, 
                  fontStyle: 'italic', 
                  fontWeight: "bold",
                  border: '1px solid',
                  '&:hover': {
                    background: 'rgba(255, 256, 237, 0.1)',
                    transition: 'all 0.2s ease'
                  }}}>
                    Ropa - Accesorios
                </Button>

                </Link>

                <Button
                  onClick={handleClickServices}
                  aria-controls="services-menu"
                sx={{
                  textTransform: 'none',
                  flexGrow: 1, 
                  color: 'white', 
                  fontSize: esMovil ? 10 : 14,
                  mr: esMovil ? 2 : 1, 
                  fontStyle: 'italic', 
                  fontWeight: "bold",
                  border: '1px solid',
                  '&:hover': {
                    background: 'rgba(255, 256, 237, 0.1)',
                    transition: 'all 0.2s ease'
                  }}}
                  
                  >
                    Servicios
                </Button>

                <Menu 
                    id="services-menu"
                    anchorEl={anchorServices}
                    keepMounted
                    open={Boolean(anchorServices)}
                    onClose={handleClose}
                    PaperProps={menuPaperProps}
                >
                      <Link href={"/barberia"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15 }} >Barberias</MenuItem>
                  </Link>
                  <Link href={"/uñas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15 }} >Uñas</MenuItem>
                  </Link>

                </Menu>

      

        </Toolbar>
     </AppBar>
     </Box>
  )
}
