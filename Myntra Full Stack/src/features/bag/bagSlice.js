import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading : false,
  items: [],
  error:'',
}

const bagSlice = createSlice({
  name:'bag',
  initialState,
  reducers:{
    addToBag: (state, action)=>{
      return {
        ...state,
        items :  [...state.items.filter((itm)=>{
          if(itm.id === action.payload.id){
            return true;
          }
        })].length>0 ?
        state.items.map((itm)=>{
          if(itm.id === action.payload.id){
            return {
              ...itm,
              quantity: itm.quantity+1,
            }            
          }
          else{
            return itm;
          }
        }):
        [...state.items, action.payload]
      }
    },
    removeFromBag:  (state, action)=>{
      return{
        ...state,
        items : state.items.filter((itm)=>{
          if(itm.id !== action.payload){
            return true;
          }
        })
      }
    },
    updateQty: (state, action)=>{
      
      return {
        ...state,
        items : state.items.map((itm)=>{
          if(itm.id === action.payload.id){
            return {
              ...itm,
              quantity: action.payload.qty,
            }            
          }
          else{
            return itm;
          }
        })
      }
    },
    delete: (state, action)=>{
      return {
        ...state,
        items : state.items.filter((itm)=>{
          if(itm.id !== action.payload){
            return itm;
          }
        })
      }
    },
    updateSummary: (state)=>{
      return {
        ...state,
        totalDiscount: state.items.reduce((acc,curr)=>{
          return acc+(curr.original_price-curr.current_price)*curr.quantity;
        },0),
        totalMRP: state.items.reduce((acc,curr)=>{
          return acc+curr.original_price*curr.quantity;
        },0),
        finalPayment: state.items.reduce((acc,curr)=>{
          return acc+curr.current_price*curr.quantity;
        },0),
        totalItems: state.items.reduce((acc,curr)=>{
          return acc+curr.quantity;
        },0),
      }
    },
    
  },
});

export default bagSlice.reducer
export const bagActions = bagSlice.actions
