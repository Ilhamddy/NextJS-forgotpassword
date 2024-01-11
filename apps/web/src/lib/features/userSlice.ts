import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface UserState {
  id: number;
  name: string;
  email: string;
  isVerified: boolean;
}

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

export default userSlice.reducer;
