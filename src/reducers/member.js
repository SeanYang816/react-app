import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  members: [{ username: "Sean", password: "1111" }],
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
