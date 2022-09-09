import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../api";

export interface UserState {
  email?:string
  firstname?:string
  lastname?:string
  store?:string
  active?:boolean
  roles?:string[]
  token?:string
}

const userState: UserState = {};

export const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    setToken:(state,action : PayloadAction<string>)=>{
      state.token = action.payload
    },
    setUser: (state, action: PayloadAction<User>) => {
        const user = action.payload;
        state.firstname = user.firstname;
        state.lastname = user.lastname;
        state.email = user.email?.email;
        state.store = user.store;
        state.roles = user.roles;
        console.log(state.store);
    },
  },
});

export const { setUser,setToken } = userSlice.actions;

export default userSlice.reducer;
