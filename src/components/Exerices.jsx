import React, {useState, useEffect} from 'react'
import { Pagination } from '@mui/material'
import {Box, Stack, Typography} from '@mui/material/'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exerices = ({exercises, setExercises, bodyPart}) => {
  const urlAll = 'https://exercisedb.p.rapidapi.com/exercises?limit=0&offset=0';
  const urlOneExercise = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9
  
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)

    window.scrollTo({top: '1000px', behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = []
      if(bodyPart === 'all'){
        exerciseData = await fetchData(urlAll, exerciseOptions) 
      } else {
        exerciseData = await fetchData(urlOneExercise, exerciseOptions)
      }

      setExercises(exerciseData)
    }

    fetchExerciseData()
  }, [bodyPart])

  return (
    <Stack id="exercises" alignItems={'center'}
    sx={{
      mt: {lg: '110px'}
    }}
    mt='50px'
    p='20px'
    
    >
        <Typography variant='h4' mb='46px' color={'white'}>
          Showing Results
        </Typography>
        <Stack direction={'row'} flexWrap='wrap' justifyContent='center' sx={{gap: {lg: '110px', xs: '50px'}}}>
          {currentExercises.map((exercise, index) => (
           <ExerciseCard key={index}exercise={exercise} index={index}/>
          ))}
        </Stack>
        <Box mt={'100px'} alignItems={'center'}>
          {exercises.length > 9 && (
            <Pagination color='secondary' shape='rounded' defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} sx={{
              "& .MuiPaginationItem-root": {
                 fontSize: "1.5rem",
                color: "white", // color for the non-active pages

              },
              "& .MuiPaginationItem-page.Mui-selected": {
                 fontSize: "1.5rem",
                color: "white", // color for the selected page
                backgroundColor: "red", // background for the active page
              },
              }}/>
          )} 
        </Box>
    </Stack>
  )
}

export default Exerices