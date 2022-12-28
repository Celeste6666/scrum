import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total_pages: 8,
  current_page: 1,
};

const sidebarSlice = createSlice({
  name: 'sidebarSlice',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.current_page = action.payload;
    },
  },
});

export const { changePage } = sidebarSlice.actions;

export default sidebarSlice.reducer;
