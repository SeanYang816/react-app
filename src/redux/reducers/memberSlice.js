import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  members: [{ username: "username", password: "password" }],
};

const memberSlice = createSlice({
  name: "member",
  initialState: initialState,
  reducers: {
    addMember(state, action) {
        state.members.push(...action.payload);
    },
  },
});

export const { addMember } = memberSlice.actions;

export default memberSlice.reducer;
