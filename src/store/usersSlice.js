import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Begimai" },
  { id: "1", name: "Meerim" },
  { id: "3", name: "Aijan" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default usersSlice;
