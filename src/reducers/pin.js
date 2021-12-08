import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pinnedTables: []
};

const slice = createSlice({
  name: "pin",
  initialState: initialState,
  reducers: {
    updateTables(state, { payload }) {
      const {pinnedTables} = state
      if(pinnedTables.includes(payload)){
        pinnedTables.splice(pinnedTables.indexOf(payload), 1)
      } else {
        pinnedTables.push(payload)
      }
    }

  },
});

export const { createInTables, updateTables } = slice.actions;

export default slice.reducer;
