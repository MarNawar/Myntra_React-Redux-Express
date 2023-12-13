import React from 'react'
import BagSummery from '../features/bag/BagSummery'
import BagItems from '../features/bag/BagItems';
import { useSelector } from 'react-redux';

function Bag() {
  const  bagItems = useSelector((state)=>{
    return state.bag.items;
  })  
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItems.map((item)=>{
              return <BagItems key ={item.id} itm={item}/>
            })}
          </div>
          <div className="bag-summary">
            <BagSummery/>
          </div>
        </div>
      </main>
    </>
    
  )
}

export default Bag