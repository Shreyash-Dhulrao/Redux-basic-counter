import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const countSlice = createSlice(
    {
        name:"counter",
        initialState,
        reducers:{
            Increase: (state)=>{
                state.value += 1
            },
            Decrease: (state)=>{
                state.value -= 1
            },
            Reset: (state)=>{
                state.value = 0
            },
            incrementByValue: (state, action)=>{
                state.value += Number(action.payload)
            }
        }
    }
)

export const {Increase , Decrease , Reset , incrementByValue} = countSlice.actions

export default countSlice.reducer