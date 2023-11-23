import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User{ 
  // id: number,
  firstName: string;
  lastName: string;
  phoneNumber: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  neighborhood: string;
  token: string | null
  city: string;
  department: string;
  tos_is_clicked: boolean;
  // dateOfExpedition: Date;
  // dateOfBirth: Date;
  // isAuth:boolean,
  // isGoogle:boolean
  // idPicture: File | string[],
}


export interface UserState{
  user: null| User
  isLoading: boolean,
  error: string| null
}

  const initialState: UserState = {
    user: null,
    isLoading: false,
    error: null,
  };

// Create auth slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    signUpSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    signUpError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // login: (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // loginSuccess: (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload;
    // },
    // loginError: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // logout: (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // // ! Here status is null cause idf bout it :)
    // logoutSuccess: (state) => {
    //   state.isLoading = false;
    //   state.user = null;
    // },
    // logoutError: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // }
  }
});

// Export the auth actions
export const {
  signUp,
  signUpSuccess,
  signUpError,
  // login,
  // loginSuccess,
  // loginError,
  // logout,
  // logoutSuccess,
  // logoutError
} = authSlice.actions;
export const selectAuthUser = (state:UserState) => state.user

// Export the auth reducer
export default authSlice.reducer;