import { configureStore } from "@reduxjs/toolkit";
import issuesReducer from "./issuesSlice"

export const store = configureStore({
    reducer: {
        store: issuesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch