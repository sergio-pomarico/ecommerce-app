import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
  email: string;
  name: string;
  avatar: string;
}

const initialState: {user?: User; isAuth: boolean} = {
  user: undefined,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAttempt: (
      _,
      __: PayloadAction<{email: string; password: string}, string>,
    ) => {},
    login: (state, action: PayloadAction<User, string>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
  },
});

export const Actions = authSlice.actions;
export default authSlice.reducer;
