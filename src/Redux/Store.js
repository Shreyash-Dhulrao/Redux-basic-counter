import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Features/counter/countSlice";

export const store = configureStore({
    reducer :  {
        counter: countReducer
    },
})