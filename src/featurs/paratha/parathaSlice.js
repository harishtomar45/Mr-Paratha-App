    import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { fetchParatha } from "./parathaService";
    
    const parathaSlice = createSlice({
        name : "parathas",
        initialState : {
            paratha : [],
            isLoading : false,
            isSuccess : false,
            isError : false,
            message : ""
        },

        reducers : {},
        extraReducers : (builder) => {
          builder
          .addCase(parathaItems.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
          }).addCase(parathaItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.paratha = action.payload;
            state.message = ""
          }).addCase(parathaItems.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = action.payload;
          })
        },
    })


    export default parathaSlice.reducer ;



    export const parathaItems = createAsyncThunk("FETCH/PARATHA", async()=>{
        try {
            return await fetchParatha()
        } catch (error) {
            console.log(error)
        }
    })


