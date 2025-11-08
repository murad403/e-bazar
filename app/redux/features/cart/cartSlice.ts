import { createSlice } from '@reduxjs/toolkit'

type TCart = {
  id: string
  name: string
  price: number
  quantity: number
}
type TIntialState = {
  cart: TCart[]
}

const initialState: TIntialState = {
  cart: []
}

const cartSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeCart: (state, action) => {
      // console.log(action);
      state.cart = state.cart.filter(product => product.id !== action.payload);
    }
  }
})

export const { addCart, removeCart } = cartSlice.actions
export default cartSlice.reducer
