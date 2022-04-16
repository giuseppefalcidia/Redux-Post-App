import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {id: '1', title: 'Learning about programming',
    content: "I've heard good things about it.",
    // time stamp string
    date: sub(new Date(), {minutes: 10}).toISOString()
},
    {id: '2', title: 'Slices...', 
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), {minutes: 5}).toISOString()
}
]

// where we add data
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    // with this you can add new posts
    reducers: {
        // automatically generates an action creator function with the same name
        postAdded: {
           reducer (state, action) {
            // Immer.js -> creates new states underneath - only works in createSlice 
            state.push(action.payload)
        },
        // prepare callback
        prepare(title, content, userId) {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(),
                    userId
                }
            }
        }
    }
}
})



export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;