import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

 const StateSlice = createSlice({
  name: 'popup',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    Popup: (state) => {
      state.value = !state.value
    },
  },
 
});

export default StateSlice;