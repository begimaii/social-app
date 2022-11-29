import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    users: usersSlice.reducer,
  },
});
