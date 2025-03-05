import React, { useEffect } from 'react'
import { Button, Stack, Box, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
import Hero2 from '../assets/images/muscle.png'


const BodyPart = ({item, bodyPart, setBodyPart}) => {

  return (
    <Stack
        type="button"
        className="bodyPart-card"
        alignItems={'center'}
        justifyContent={'center'}
        onClick={() => {
          setBodyPart(item)
          window.scrollTo({top: '1800px', left: '100px', behavior: 'smooth'})
        }}
        sx={{
          border: 'none',
          borderTop: bodyPart === item ? '4px solid #ff2625' : '',
          backgroundColor: 'black',
          borderBottomLeftRadius: '20px',
          backgroundSize: 'cover',
          width: '270px',
          height: '280px',
          cursor: 'pointer',
          gap: '47px',
        }}
    >
        <img src={Icon} alt="dumbbell" style={{ width: '100px', height: '100px'}} />
       <Typography sx={{fontSize: '30px', fontWeight: '800'}} color={'white'}>{item}</Typography>
    </Stack>
  )
}

export default BodyPart