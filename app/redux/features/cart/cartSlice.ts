import { createSlice } from '@reduxjs/toolkit';

type TCart = {
    name: string;
    price: number;
    quantity: number;
}
type TIntialState = {
    cart: TCart[]
}

const initialState: TIntialState = {
    cart: [],
}

const cartSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addCart: (state, action) =>{
        state.cart.push(action.payload);
    }
  },
})

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;