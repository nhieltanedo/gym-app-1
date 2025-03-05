import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
     direction='row'
     justifyContent='space-around'
     p='20px'
     sx={{gap: {sm: '122px', xs: '40px'}, justifyContent: 'none'}}
     >
        <Link to = "/">
        <img src={Logo} alt='logo' style={{width: '78px', height: '58px', margin: '0 20px', color: 'white'}}/>
        </Link>
        <Stack 
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
        >
            <Link to = "/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid red', color: 'white', fontSize: '35px'}}>Home</Link>
            <a href = "#exercises" style={{textDecoration: 'none', color: 'white', fontSize: '35px'}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar