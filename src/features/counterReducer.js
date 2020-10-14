import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => { state.value += 1 },
        decrement: state => { state.value -= 1 },
        incrementBy: (state, action) => { state.value += Number(action.payload) },
        decrementBy: (state, action) => { state.value -= Number(action.payload) }
    }
});

export const {increment, decrement, incrementBy, decrementBy} = slice.actions;
export const selectCount = state => state.counterReducer.value;
export default slice.reducer;