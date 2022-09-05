import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { store } from './store'

export interface UserState {
    firstname?:string
    lastname?:string
    email?:string
    store?:string
    roles?:string[]
}

const userState:UserState ={
    firstname :"",
    lastname : "",
    email:"",
    store: "",
    roles:[]
}

export const userSlice = createSlice({
    name:"user",
    initialState:userState,
    reducers:{
        setUser:(state,action:PayloadAction<object>)=>{
            state.firstname="hello"
            console.log(action.payload)
        }
    }
})

export const {setUser} = userSlice.actions

export default userSlice.reducer