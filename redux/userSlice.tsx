// 'use client'
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// // import {MyInterfaces} from '../../../typings'

// // Puedo tirar una interfaz y desde el perfil si necesito hago el fetch completo
// // Define the initial state
// export interface User{ 
//   // id: number,
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   department: string;
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   city: string;
//   neighborhood: string;
//   tos_is_clicked: boolean;
//   dateOfExpedition: Date;
//   dateOfBirth: Date;
//   // isAuth:boolean,
//   // isGoogle:boolean
//   // idPicture: File | string[],
// }


// export interface UserState{
//   user: User[]
//   isLoading: boolean,
//   error: string
// }

//   const initialState: UserState = {
//     user: [],
//     isLoading: false,
//     error: '',
//   };

// // Create a slice for user data
// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     fetchUsersStart: (state) => {
//       state.isLoading = true;
//       state.error = '';
//     },
//     fetchUsersSuccess: (state, action) => {
//       state.user = action.payload;
//       state.isLoading = false;
//       state.error = '';
//     },
//     fetchUsersFailure: (state, action: PayloadAction<string>) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// // Export the actions
// export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;

// // Export the reducer
// export default userSlice.reducer;