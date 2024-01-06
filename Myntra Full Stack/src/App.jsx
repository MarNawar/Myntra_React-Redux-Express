import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
// import Bag from './components/Bag'
import Home from './components/Home'
import { lazy, useEffect, Suspense } from 'react'
import { fetchItems } from './features/items/itemSlice'

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchItems());
  },[]);

  const Bag = lazy(()=>{return import('./components/Bag')})


  return (
    <>
    <Router>
      <Header/>

      <Routes>
        <Route exact path ='/' element={
          <Home/>
        }></Route>
        
        <Route exact path = '/bag' element={
          <Suspense fallback={<div>Loading....</div>}>
          <Bag/>
          </Suspense>
        }></Route>
      </Routes>

      <Footer/>
    </Router>
    </>
  )
}

export default App
