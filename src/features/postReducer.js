import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from 'nanoid'

export const postSlice =  createSlice({
    name : 'post',
    initialState: {
        user : {logged: false, nick: 'user'},
        posts : [{id: 0, title : 'test', text: 'test text', author : 'Elene'}]

    },

    reducers: {
        login : (state, action) => {
            state.user.logged = true;
            state.user.nick = action.payload;
        },
        logout : (state) => {
            state.user.logged = false
            state.user.nick = 'user'
        },
        post : (state, action) => {
            state.posts.push({
                id: nanoid(),
                title: action.payload.title,
                text: action.payload.text,
                author: state.user.nick
            })
        }
    }
})

export const {login, logout, post} = postSlice.actions;
export const userSelector = state => state.postReducer.user;
export const postsSelector = state => state.postReducer.posts;
export default postSlice.reducer;