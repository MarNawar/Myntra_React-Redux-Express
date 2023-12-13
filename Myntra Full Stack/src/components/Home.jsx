import React from 'react'
import HomeItem from '../features/items/HomeItem'
import { useSelector } from 'react-redux'
import Loader from './Loader'

function Home() {
  const item = useSelector((state)=>{
    return state.item
  })
  
  return (
    <main>
      {item.loading===true?<Loader/>:
      <div className="items_container">
        {item.items.map((itm)=>{
          return <HomeItem itm={itm} key={itm.id}/>
        })}
      </div>}
    </main>
  )
}

export default Home