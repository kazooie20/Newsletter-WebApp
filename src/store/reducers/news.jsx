import { createSlice } from "@reduxjs/toolkit";
import {fetchPosts, fetchPostByID} from '../thunks/thunks'

export const newsSlice = createSlice({
    name : 'news',
    initialState : {
        loading: true,
        articles : {
            items : []
        },
        article : {}
        
    },
    reducers : {
        clearPostById: (state,action) => {
            state.article = {}

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true

        })
        .addCase(fetchPosts.fulfilled, (state,action) => {
            state.loading = false
            state.articles = action.payload

        })
        .addCase(fetchPosts.rejected, (state) => {
            state.loading = false

        })
        //IDK WHY I ADD THIS
        builder.addCase(fetchPostByID.pending, (state) => {
            state.loading = true

        })
        .addCase(fetchPostByID.fulfilled, (state,action) => {
            state.loading = false
            state.article = action.payload

        })
        .addCase(fetchPostByID.rejected, (state) => {
            state.loading = false

        })

        
    }
})

export default newsSlice.reducer;
export const {clearPostById} = newsSlice.actions;