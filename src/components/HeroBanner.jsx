import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
import Hero1 from '../assets/images/hero1.png'
import Hero2 from '../assets/images/hero2.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '220px', xs: '70px'},
        ml: {sm: '50px'}
    }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='40px'>
            Muscle Tech
        </Typography>
        <Typography mb='23px' mt='30px' color={'white'} fontWeight={700} sx={{fontSize: {lg: '54px', xs: '40px'}}}>
            No Pain,<br /> No Gain
        </Typography>
        <Typography fontSize='20px' lineHeight='35px' mb={3}>
            Checkout the most Exercises
        </Typography>
        <Button variant='contained' href='#exercises'sx={{backgroundColor: 'red', padding: '15px', '&:hover': {bgcolor: 'white', color: 'black'}}}>Explore Exercises</Button>
        <Typography fontWeight={600}
        color='white'
        fontSize='200px'
        sx={{opacity: 0.9, display: {lg: 'block', xs: 'none'}}}
        >
           Muscles Fitness
        </Typography>
        <img src={Hero1} alt='banner' className='hero-banner-img'/>
    </Box> 
  )
}

export default HeroBanner 