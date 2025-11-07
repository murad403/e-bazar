import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthSlice {
  access: string;
  refresh: string;
  user_id: string;
  username: string;
}

const initialState: AuthSlice = {
   access: "",
   refresh: "",
   user_id: "",
   username: ""
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAuth: (state, action) =>{
      // console.log(action.payload);
        state.access = action.payload.access || "",
        state.refresh = action.payload.refresh || "",
        state.user_id = action.payload.user_id || "",
        state.username = action.payload.username || ""
    }
  },
})


export const { addAuth } = counterSlice.actions
export default counterSlice.reducer;