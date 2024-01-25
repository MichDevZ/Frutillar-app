'use client'
import { AppBar, Box, Button, Menu, MenuItem, Paper, PaperProps, Toolbar, useMediaQuery } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"



export const Main = () => {

  
  const esMovil = useMediaQuery('(max-width:600px)');
  
  const menuItemsStyle = {
      color: 'white',
     fontWeight: 'bold', 
     fontSize: esMovil ? 11 : 15 , 
     display: esMovil ? 'inline-flex' : '',
     border: esMovil ? '1px solid' : '',
     marginLeft: esMovil ? 1.5 : 0,
    marginBottom: esMovil ? 1 : 0
  }
  
  const menuPrincipalStyles = {
      flexGrow: 1,
      textTransform: 'none',
      color: 'white', 
      fontSize: esMovil ? 10 : 14,
      mr: esMovil ? 2 : 1, 
      fontStyle: 'italic', 
      fontWeight: "bold",
      whiteSpace: 'nowrap',
      border: '1px solid',
      '&:hover': {
        background: 'rgba(255, 256, 237, 0.1)',
        transition: 'all 0.2s ease'
      }

  }

    const menuPaperProps: PaperProps = {
        style: {
          backgroundColor: '#cf5a46',
          maxHeight: esMovil ? 250 : '100%',
          maxWidth: 300,
          justifyContent: 'center',
          
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
                sx={menuPrincipalStyles}>
                    Comida
                </Button>
                
                <Paper>
                <Menu 
                    id="food-menu"
                    anchorEl={anchorElFood}
                    keepMounted
                    open={Boolean(anchorElFood)}
                    onClose={handleClose}
                    PaperProps={menuPaperProps}

                >
                  <Link href={"/sushi"} style={{textDecoration: 'none' }} >
                    <MenuItem onClick={handleClose}  
                    sx={menuItemsStyle}  >Sushi</MenuItem>
                  </Link>
                  <Link href={"/hamburguesas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}  
                    sx={menuItemsStyle} >Hamburguesas</MenuItem>
                  </Link>

                  <Link href={"/tablas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}  
                    sx={menuItemsStyle} >Tablas</MenuItem>
                  </Link>

                  <Link href={"/papas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}  
                    sx={menuItemsStyle} >Papas fritas</MenuItem>
                  </Link>

                      <Link href={"/pizzas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}  
                    sx={menuItemsStyle} >Pizzas</MenuItem>
                  </Link>
                  <Link href={"/completos"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}  
                    sx={menuItemsStyle} >Completos</MenuItem>
                  </Link>
                  <Link href={"/picadas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}  
                    sx={menuItemsStyle} >Picadas</MenuItem>
                  </Link>
                  <Link href={"/empanadas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}  
                    sx={menuItemsStyle} >Empanadas</MenuItem>
                  </Link>
                  <Link href={"/pasteleria"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}  
                    sx={menuItemsStyle} >Pasteleria</MenuItem>
                  </Link>
                </Menu>

                </Paper>

                <Button 
                onClick={handleClickLodging}
                aria-controls="lodging-menu"
                sx={menuPrincipalStyles}
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
                <Link href={'/uber'} style={{textDecoration: 'none'}}>
                <Button sx={menuPrincipalStyles}>
                    Uber
                </Button>
                </Link>

                <Link href={"/tiendas"} style={{textDecoration: 'none'}}>
                <Button sx={menuPrincipalStyles}>
                   Tiendas
                </Button>

                </Link>

              <Link href={"/ropa"} style={{textDecoration: 'none'}}>
                <Button sx={menuPrincipalStyles}>
                    Ropa - Accesorios
                </Button>

                </Link>

                <Button
                  onClick={handleClickServices}
                  aria-controls="services-menu"
                sx={menuPrincipalStyles}
                  
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
                  <Link href={"/unas"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15 }} >Uñas - Pestañas - Homestudio</MenuItem>
                  </Link>

                  <Link href={"/costura"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15 }} >Costuras - Bordados - Otros</MenuItem>
                  </Link>

                  <Link href={"/turismo"} style={{textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose} 
                    sx={{color: 'white', fontWeight: 'bold', fontSize: esMovil ? 11 : 15 }} >Turismo</MenuItem>
                  </Link>


                </Menu>

      

        </Toolbar>
     </AppBar>
     </Box>
  )
}
