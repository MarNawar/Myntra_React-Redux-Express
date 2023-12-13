import React, { useEffect, useState } from 'react'
import { bagActions } from '../bag/bagSlice';
import { useDispatch, useSelector } from 'react-redux';

function HomeItem({itm}) {
  const [isDisabled, setIsDisabled] = useState(false)
  
  const  bagItems = useSelector((state)=>{
    return state.bag;
  })

  useEffect(()=>{
    setIsDisabled(false)
    bagItems.items.forEach(element => {
      if(element.id ===itm.id){
        setIsDisabled(true)
      }
    });
  },[bagItems])

  const dispatch = useDispatch();

  function addToBag(){
    setIsDisabled(true)
    dispatch(bagActions.addToBag(itm))
    dispatch(bagActions.updateSummary())
  }

  return (
    <>
     
     <div className="item_container" id={itm.id}>
      <img src={itm.image} alt="item image" className="item_image"/>
      <div className="rating">
          {itm.rating.stars} ⭐ | {itm.rating.count}
      </div>
      <div className="company_name">{itm.company}</div>
      <div className="item_name">{itm.item_name}</div>
      <div className="price">
          {itm.current_price===itm.original_price?
            <span className="current_price">Rs {itm.current_price}</span>:
            <>
            <span className="current_price">Rs {itm.current_price}</span>
            <span className="original_price">Rs {itm.original_price}</span>
            <span className="discount">({itm.discount_percentage}% OFF)</span></>
          } 
      </div>
      <button className="btn_add_bag" onClick={addToBag} disabled={isDisabled}>Add to Bag</button>
    </div>
    </>
  )
}

export default HomeItem