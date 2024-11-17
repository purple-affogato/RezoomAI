import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ContactEntry from './assets/ContactEntry'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Form, Button } from 'react-bootstrap';
import ResumeBuilder from './ResumeBuilder'
import './App.css'

function App() {
  return(
    <Routes>
        <Route path="/" element={<ResumeBuilder/>}>
        </Route>
      </Routes>
  )
}

export default App
