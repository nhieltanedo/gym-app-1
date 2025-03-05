import React from 'react'
import { Typography, Stack, Box, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'
import { BorderAllRounded } from '@mui/icons-material'


const Detail = ({exerciseDetail}) => {

    const {bodyPart, gifUrl, target, name, equipment} = exerciseDetail
    console.log(exerciseDetail)

    const extraDetail = [
        {
            id: 1,
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            id: 2,
            icon: TargetImage,
            name: target
        },
        {
            id: 3,
            icon: EquipmentImage,
            name: bodyPart
        }
    ]


  return (
    <Stack gap='50px' sx={{flexDirection: {lg: 'row'}, p: '50px', alignItems: 'center' }}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' style={{borderRadius: '10%'}}/>
        <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
            <Typography color={'white'} variant='h3'>
                {name}
            </Typography>
            <Typography color={'white'} variant='h6'>
                Exercise keeps you strong <span style={{color: 'red'}}>{name}</span>{' '} 
                bup is one of the best exercises to target your {target}{' '}
                it will help you gain your mood and gained strength
            </Typography>
            {extraDetail.map(item => (
                <Stack key={item.id} direction={'row'} gap={'24px'} alignItems={'center'}>
                    <Button sx={{background: '#fff2db', width: '120px', height: '120px'}}>
                    <img 
                    src={item.icon} 
                    alt={bodyPart} 
                    width="50px" 
                    height="50px" 
                    className='image-icon'
                    />
                        <Typography variant = 'h6' textTransform={'capitalize'} color={'red'}>{item.name}</Typography>
                    </Button>
                </Stack>
            ))}

        </Stack>
    </Stack>
  )
}

export default Detail