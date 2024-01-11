import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
// import { use } from 'react';

// Define a type for the slice state
export interface UserState {
  id: number;
  name: string;
  email: string;
  isVerified: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  id: 0,
  name: '',
  email: '',
  isVerified: false,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isVerified = action.payload.isVerified;
    },
    logoutAction: (state) => {
      state.id = 0;
      state.name = '';
      state.email = '';
      state.isVerified = false;
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
