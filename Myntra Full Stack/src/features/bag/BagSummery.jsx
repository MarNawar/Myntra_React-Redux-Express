import { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from './bagSlice';

function BagSummery() {

  const  bagItems = useSelector((state)=>{
    return state.bag;
  })

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(bagActions.updateSummary());
  },[])

  return (<>
    <div className="bag-details-container">
      <div className="price-header">PRICE DETAILS ({bagItems.totalItems} Items) </div>
      <div className="price-item">
        <span className="price-item-tag">Total MRP</span>
        <span className="price-item-value">Rs${bagItems.totalMRP}</span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Discount on MRP</span>
        <span className="price-item-value priceDetail-base-discount">-Rs${bagItems.totalDiscount}</span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Convenience Fee</span>
        <span className="price-item-value">Rs ${bagItems.totalItems!==0?99:0}</span>
      </div>
      <hr/>
      <div className="price-footer">
        <span className="price-item-tag">Total Amount</span>
        <span className="price-item-value">Rs ${bagItems.finalPayment}</span>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
    </>
  )
}

export default BagSummery