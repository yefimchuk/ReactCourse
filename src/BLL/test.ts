import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

interface CounterState {
    value: number
}

const initialState = {value: 0} as CounterState
let thunk = createAsyncThunk("users/fetchByIdStatus",
    async (userId: number, thunkAPI) => {


        return userId
    })
const counterSlice = createSlice({
    name: 'counter',
    initialState: {value: 0},
    reducers: {
        increment(state, action) {

            state.value = action.payload
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed

    },
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer