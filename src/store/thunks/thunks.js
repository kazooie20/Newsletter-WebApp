import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_SERV = 'http://localhost:3001';

export const fetchPosts = createAsyncThunk(
    'news/fetchPosts',
    async ({page,limit,order}, {getState}) => {
        try {
            const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);
            const prevState = getState().news;
            return { 
                items : [...prevState.articles.items, ...response.data],
                page: page,
                end: response.data.length === 0 ? true : false 

            }
            
        } catch (error) {
            throw error;
            
        }

    }
)

export const fetchPostByID = createAsyncThunk(
    'news/fetchPostByID',
    async(id) => {
        try {
            const response = await axios.get(`${URL_SERV}/posts/${id}`);
            return response.data;
            
        } catch (error) {
            throw error;
            
        }
    }
)

export const addToNewsletter = createAsyncThunk(
    'users/addToNewsletter',
    async(data) => {
        try {
            //1.Find user if on database
            const findUser = await axios.get(`${URL_SERV}/newsletter?email=${data.email}`);

            if (!Array.isArray(findUser.data) || !findUser.data.length) {
                const response = await axios({
                    method : 'POST',
                    url : `${URL_SERV}/newsletter`,
                    data : {
                        email : data.email
                    }
                });
                return {
                    newsletter: 'added',
                    email: response.data
                }
            } else {
                return {
                    newsletter: 'failed',
                }

            }
            
        } catch (error) {
            throw error;
        }
    }
)

export const sendMessage = createAsyncThunk(
    'users/sendMessage',
    async(values) => {
        try {
            await axios({
                method: 'POST',
                url : `${URL_SERV}/contact`,
                data : values
            })
            return true;
            
        } 
        catch (error) {
            throw error;
        }

    }
)