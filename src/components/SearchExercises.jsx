import React, { useEffect } from 'react'
import { Stack, Typography, Box, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])
    
    const urlAll = 'https://exercisedb.p.rapidapi.com/exercises?limit=0&offset=0';
    const urlBodyParts = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData(urlBodyParts, exerciseOptions)
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExerciseData()
    }, []) 

    const handleSearch = async () => {
        if(search){
            const exercisesData = await fetchData(urlAll, exerciseOptions)
            const SearchExercises = exercisesData.filter(exercises => exercises.name.toLowerCase().includes(search) ||
            exercises.target.toLowerCase().includes(search) || exercises.bodyPart.toLowerCase().includes(search) || exercises.equipment.toLowerCase().includes(search))

            setSearch('')
            setExercises(SearchExercises)
        }        
    }



  return (
   <Stack alignItems={'center'} mt={'35px'} justifyContent={'center'} p={'20px'}>
       <Typography fontWeight={'900'} sx={{fontSize: {lg: '44px', xs: '30px'}}} mb={'49px'} textAlign={'center'} color='whitesmoke'>Awesome Exercises You <br /> Should Know</Typography>
       <Box position={'sticky'} mb={'72px'} top={'100px'}>
       <TextField
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          placeholder="Search Exercises"
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
        className='btn-search'
        sx={{bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: {lg: '175px', xs: '80px'}, height: '55px', position: 'absolute', right: 0, fontSize: {lg: '20px', xs: '14px'}, 
        '&:hover': {
            color: 'red',
            borderWidth: '1px',
            borderColor: 'red'
        }    
    }} 
        onClick={handleSearch}
        >
            Search
        </Button>
       </Box>
       <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
            <HorizontalScrollBar data = {bodyParts} bodyParts={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
       </Box>
   </Stack>
  )
}

export default SearchExercises