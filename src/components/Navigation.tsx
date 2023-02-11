
import { Height } from '@mui/icons-material'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.svg'


export default function Navigation() {
  return (


  
      <Box display='flex' alignItems='center' justifyContent='space-around' 
       pb={10} pt={6} >
        <Box display='flex' alignItems='center' gap={2}>
          <img width={40} src={logoImg} alt="logo Soundwave " />
          <Link to= "/soudwave" >
          <Typography fontSize='1.2rem'>Soundwave</Typography>
          </Link>
        </Box>
        <Box display='flex' gap={2}  >
          <Link to= "/discover">
          <Typography fontSize='1.2rem'>Discover</Typography>
          </Link>
          <Link to= "/join">
              <Typography fontSize='1.2rem'>Join</Typography>
          </Link>
        </Box>
      </Box>


  )
}
