import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { items } from '../../data/items';
import axios from 'axios'

const initialState = {
  loading : false,
  items: [],
  error:'',
}

//createAsyncThunk  automatically generate pending , fulfilled, and rejected action types
export const fetchItems = createAsyncThunk('item/fetchItems', ()=>{
  return axios
    .get('http://localhost:8080/items')
    .then(response=> response.data.items)
})

const itemSlice = createSlice({
  name:'item',
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(fetchItems.pending, state=>{
      state.loading = true
    })
    builder.addCase(fetchItems.fulfilled, (state,action)=>{
      state.loading = false
      state.items = action.payload
      state.error = ''
    })
    builder.addCase(fetchItems.rejected, (state,action)=>{
      state.loading = false
      state.items = []
      state.error = action.error.message
    })
  },
});

export default itemSlice.reducer
export const itemActions = itemSlice.actions
