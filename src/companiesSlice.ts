import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: false,
    error: null,
}

export const fetchData = createAsyncThunk("companies/fetchData", async () => {
    const response = await fetch("https://api.github.com/organizations");
    const data = await response.json();
    return data;   
})

const companiesReducer = createSlice({
    name: "companies",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData.pending, (state) =>{
            state.isLoading = true;
        })

        builder.addCase(fetchData.fulfilled, (state, action:any) =>{
            state.isLoading = false;
            state.data = action.payload;
        })

        builder.addCase(fetchData.rejected, (state, action) =>{
            state.error = action.error.message;
        })
    },
})

export default companiesReducer.reducer;