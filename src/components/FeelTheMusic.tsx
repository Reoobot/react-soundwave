import { Block, Circle, HideImage, Image } from '@mui/icons-material'
import { Button, CircularProgress, Grid, ImageListItem, Typography } from '@mui/material'
import { Box, width } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'



type Props = {}

const FeelTheMusic = (props: Props)=> {
  return (
 
    <Box display='flex' 
      gap='5em' m={10}
      justifyContent='center'
      alignItems='center'
      height='408px'
      >
      <span className='cir1'></span>
      <span className='cir2'></span>
      <span className='cir3'></span>
       
       <div className='centrar'>

          <Box display={{ xs: 'none', sm: 'block' }}>
            <ImageListItem sx={{width:400}} >
              <img src={require('../assets/login.png')} alt="" />
            </ImageListItem>
            </Box>
          <Box mt={17}>
          <Typography variant='h3' fontFamily='Poppins'>
          Feel The Music
          </Typography>
          

          <Typography fontSize='1rem' fontFamily='Poppins'>
                Stream over 20 thousand songs with on
          </Typography>
          <Typography fontSize='1rem' fontFamily='Poppins' >
                click
          </Typography>
            
      
             

              <Button  type='submit' variant='contained' sx={{mt:1.5, mb:3}}>
                   <Link to= "/join" >
                   <Typography fontSize='1.2rem'fontFamily='Poppins' >
                   join now
                  </Typography></Link>
                   
              </Button>
        </Box>
       </div>

    </Box>
  
 
  )
}

export default FeelTheMusic
