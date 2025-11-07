import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthSlice {
  access: string;
  refresh: string;
  user_id: number;
}

const initialState: AuthSlice = {
   access: "",
   refresh: "",
   user_id: 0,
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAuth: (state, action) =>{
        state.access = action.payload.access,
        state.refresh = action.payload.refresh,
        state.user_id = action.payload.user_id
    }
  },
})


export const { addAuth } = counterSlice.actions
export default counterSlice.reducer;