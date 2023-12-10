import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Bag from './components/Bag'
import Home from './components/Home'

function App() {
  
  return (
    <>
    <Router>
      <Header/>

      <Routes>
        <Route exact path ='/' element={
          <Home/>
        }></Route>

        <Route exact path = '/bag' element={
          <Bag/>
        }></Route>
      </Routes>

      <Footer/>
    </Router>
    </>
  )
}

export default App
