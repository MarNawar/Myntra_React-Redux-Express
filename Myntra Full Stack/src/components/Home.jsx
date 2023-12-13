import React from 'react'
import HomeItem from '../features/items/HomeItem'
import { useSelector } from 'react-redux'
import Loader from './Loader'
import FilterView from '../features/filter/FilterView'

function Home() {
  const item = useSelector((state)=>{
    return state.item
  })

  const filtered = useSelector((state)=>{
    return state.filter
  })


  const transformProducts = () => {
    let sortedProducts = [...item.items];
    if (filtered.sort!=='') {
      sortedProducts = [...sortedProducts].sort((a, b) => {
        return filtered.sort === 'lowToHigh' ? a.current_price - b.current_price : b.current_price - a.current_price
      });
    }
    if (filtered.byRating) {
      sortedProducts = [...sortedProducts].filter((prod) => {
        if(prod.rating.stars >= filtered.byRating)
          return true;
      })
    }
    if (filtered.searchQuery) {
      sortedProducts = [...sortedProducts].filter((prod) => prod.item_name.toLowerCase().includes(filtered.searchQuery.toLowerCase())||prod.company.toLowerCase().includes(filtered.searchQuery.toLowerCase()))
    }
    return sortedProducts;
  }

  const productsToDisplay = transformProducts();

  
  return (
    <main>
      {item.loading===true?<Loader/>:
      <>
        <FilterView/>
        <div className="items_container">
          {productsToDisplay.map((itm)=>{
            return <HomeItem itm={itm} key={itm.id}/>
          })}
        </div>
      </>
      }
    </main>
  )
}

export default Home