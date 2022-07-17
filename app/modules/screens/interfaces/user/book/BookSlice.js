import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

}

export const loadOrder = createAsyncThunk(
    'call/create',
    async ({ getState }) => {
        // thực hiện load dữ liệu từ db

    }
)

const loadOrderDone = {
    [loadOrder.pending]: (state, action) => {
    },
    [loadOrder.fulfilled]: (state, action) => {

    },
    [loadOrder.rejected]: (state, action) => {

    },
}


const actions = {

}

const BookSlice = createSlice({
    name: 'slice/call',
    initialState,
    reducers: actions,
    extraReducers: {
        ...loadOrderDone
    }
})

export default BookSlice.reducer;

