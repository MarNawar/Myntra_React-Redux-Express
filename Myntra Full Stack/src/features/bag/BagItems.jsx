import React from 'react'
import { useDispatch } from 'react-redux';
import { bagActions } from './bagSlice';

function BagItems({itm}) {
  const dispatch = useDispatch();
  
  function deleteItem(id){
    dispatch(bagActions.delete(id));
    dispatch(bagActions.updateSummary());
  }
  function changeQty(qty, id){
    dispatch(bagActions.updateQty({qty, id}))
    dispatch(bagActions.updateSummary());
  }

  return <>
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={itm.image}/>
        </div>
        <div className="item-right-part">
          <div className="company">{itm.company}</div>
          <div className="item-name">{itm.item_name}</div>
          <div className="price-container">
            {itm.current_price===itm.original_price?
              <span className="current_price">Rs ${itm.current_price}</span>:
              <>
                <span className="current_price">Rs ${itm.current_price}</span>
                <span className="original_price">Rs ${itm.original_price}</span>
                <span className="discount">({itm.discount_percentage}% OFF)</span>
              </>
            }   
          </div>
          <div className="qty">
            Qty : {itm.quantity}
          </div>
          <div className="return-period">
            <span className="return-period-days">{itm.return_period} days</span> return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">{itm.delivery_date}</span>
          </div>
        </div>
        <div className="remove-from-cart" onClick={()=>deleteItem(itm.id)}><i className="fa-solid fa-trash fa-xs" style={{color: "#ff3f6c"}}></i>x</div>
        <div className="quantites">
          <select name="quantity" id="quantity" onChange={(e)=>{
            changeQty(+e.target.value, itm.id)}
          } defaultValue={"0"}>
            <option value="0" disabled >Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </>
}

export default BagItems