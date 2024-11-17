import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ContactEntry from './ContactEntry'
import EduEntry from './EduEntry'
import ExperienceEntry from './ExperienceEntry'
import ResumeBuilder from './ResumeBuilder'
import 'bootstrap/dist/css/bootstrap.min.css'
import JobEntry from './JobEntry'
import SignIn from './SignIn'

import './App.css'


function App() {
  return(
  <Routes>
    <Route path="/" element={<SignIn/>} />
    <Route path="/builder" element={<ResumeBuilder/>}/>
    <Route path="/joblisting" element={<JobEntry/>}/>
    
  </Routes>


)
}

export default App
