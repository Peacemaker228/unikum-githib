// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { createWrapper, HYDRATE } from 'next-redux-wrapper';
// import { ACCESS_TOKEN, TOKEN } from '../../lib/urlSettings';
// import { IAuth } from '../../types/Auth/Interfaces/IAuth';
// import { userLoginThunk } from './actionLogin';

// const initialState: IAuth = {
//   errorLogin: false,
//   errorStatus: -1,
//   success: false,
//   isAuth: !!TOKEN ? true : false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout(state) {
//       state.isAuth = false;
//       state.success = false;
//       state.errorLogin = false;
//       state.errorStatus = -1;

//       localStorage.clear();
//     },
//     [HYDRATE]: (state, action: PayloadAction<any>) => {
//       return {
//         ...state,
//         ...action.payload.auth,
//       };
//     },
//   },
//   extraReducers: {
//     [userLoginThunk.fulfilled.type]: (state, action: PayloadAction<any>) => {
//       localStorage.setItem(ACCESS_TOKEN, action.payload.token);

//       state.errorLogin = false;
//       state.errorStatus = -1;
//       state.isAuth = true;
//       state.success = true;
//     },
//     [userLoginThunk.rejected.type]: (state, action: PayloadAction<any>) => {
//       state.errorLogin = true;
//       state.errorStatus = action.payload;
//       state.isAuth = false;
//       state.errorLogin = true;
//       state.success = false;
//     },
//   },
// });

// export const { logout } = authSlice.actions;

// export const selectAuthState = (state: ) => state.auth.authState;

// export default authSlice.reducer;
export {};
