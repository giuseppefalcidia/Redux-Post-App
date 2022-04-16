import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'John Doe'},
    {id: '1', name: 'Mark Young'},
    {id: '2', name: 'Albert White'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

//import it inside store.js
export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;