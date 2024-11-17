import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ContactEntry from './assets/ContactEntry'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  return(
  <Routes>
    <Route path="/" element={<ContactEntry/>}>
      {/* <Route path="" element={}/> */}
    </Route>
    
  </Routes>


)
}

export default App
