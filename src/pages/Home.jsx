import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exerices from '../components/Exerices'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  return (
    <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exerices exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/> 
    </Box>
  )
}

export default Home