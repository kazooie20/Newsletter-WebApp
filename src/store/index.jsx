import {configureStore} from '@reduxjs/toolkit';
import  newsSlice  from './reducers/news';
import  usersSlice  from './reducers/users';

export const store = configureStore({
    reducer : {
        news : newsSlice,
        users : usersSlice
    }
})