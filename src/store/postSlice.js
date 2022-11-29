import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learning Redux Toolkit", content: "Good news..." },
  { id: "2", title: "Learning Redux Toolkit", content: "Bad news..." },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    //     reducer(state, action){
    //       state.push(action.payload)
    //     },
    //     prepare :(title,content) =>{
    //       return{
    //        payload: {
    //            id: nanoid(),
    //            title,
    //            content,

    // }
    //       }
    //     }

    postAdded(state, action) {
      state.unshift(action.payload);
    },
  },
});
export const selectAllPost = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice;
