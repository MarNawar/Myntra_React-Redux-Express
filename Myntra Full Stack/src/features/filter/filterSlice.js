import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sort: '',
  byRating: 0,
  searchQuery:'',
}

const filterSlice = createSlice({
  name:'filter',
  initialState,
  reducers:{
    lowToHigh: (state)=>{
      return{
        ...state,
        sort: 'lowToHigh',
      }
    },
    highToLow: (state)=>{
      return{
        ...state,
        sort: 'highToLow',
      }
    },
    searchQuery:(state,action)=>{
      return{
        ...state,
        searchQuery: action.payload, 
      }
    },
    rating: (state, action)=>{
      return{
        ...state,
        byRating: action.payload, 
      }
    },
    clearFilter:()=>{
      return {
        sort:'',
        byRating: 0,
        searchQuery:'',
      }
    }
  },
});

export default filterSlice.reducer
export const filterActions = filterSlice.actions
