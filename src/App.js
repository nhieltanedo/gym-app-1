import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BG from './assets/images/bg.jpg'

const App = () => {
  return (
    <Box width="500px" sx={{backgroundImage: `url(${BG})`, backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundSize: 'cover',  width: {xl: '100%'}}} m="auto" p={'50px'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App