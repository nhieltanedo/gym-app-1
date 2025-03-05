import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData'
import SimilarExercise from '../components/SimilarExercise'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'




const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDataURL = 'https://exercisedb.p.rapidapi.com/exercises'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDataURL}/exercise/${id}`, exerciseOptions)
      if(exerciseDetailData){
        setExerciseDetail(exerciseDetailData.contents)
      }

        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions) 
        if(exerciseVideosData){
          setExerciseVideos(exerciseVideosData)
        }
    }
    fetchExerciseData()
  }, [id])


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} exerciseDetail = {exerciseDetail}/>
      <SimilarExercise />
    </Box>
  )
}

export default ExerciseDetail