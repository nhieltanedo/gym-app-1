import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography, Button } from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt='exercisePic' loading='lazy'/>
        <Stack direction={'row'}>
            <Button sx={{ml: '21px', color: '#fff', background: 'red', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml: '21px', color: '#fff', background: 'red', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml={'21px'} color={'red '} fontWeight={'bold'} mt={'11px'} mb={'11px'} textTransform={'capitalize'} fontSize={'21px'}>
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard