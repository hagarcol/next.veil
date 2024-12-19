import { createSlice } from "@reduxjs/toolkit";
// ----------------------------------------------------------------------

const initialState = {
  open: false,
  type: 'locked'
};

const slice = createSlice({
  name: "extra",
  initialState,
  reducers: {
    // SET OPEN
    isModalOpen(state, action) {
      state.open = action.payload;
    },

    // SET TYPE
    setModalType (state, action) {
      state.type = action.payload
    }
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { isModalOpen, setModalType } = slice.actions;

