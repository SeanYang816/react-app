import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  members: [{ username: "username", password: "password" }],
};

const slice = createSlice({
  name: "member",
  initialState: initialState,
  reducers: {
    addMember(state, action) {
      state.members.push(...action.payload);
    },
  },
});

export const { addMember } = slice.actions;

export default slice.reducer;
