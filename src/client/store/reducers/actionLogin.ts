// import { Login } from '../../services/Admin/LogIn';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ACCESS_TOKEN } from '../../lib/urlSettings';
// import axios, { AxiosError } from 'axios';
// import {
//   IAuthError,
//   LoginData,
// } from '../../types/Services/Interfaces/IServices';

// // export const userLogin = async (dispatch: AppDispatch) => {
// //   try {
// //     dispatch(cashReducerSlice.actions.cashAddAction(25));
// //     const response = await Login();
// //     dispatch(cashReducerSlice.actions.cashAddAction(25));
// //   } catch (e) {
// //     console.log(e);
// //   }
// // };

// export const userLoginThunk = createAsyncThunk(
//   'user/userLoginThunk',
//   async (data: LoginData, thunkAPI) => {
//     try {
//       const response = await Login(data);
//       console.log(data);
//       return response.data;
//     } catch (e) {
//       // if (axios.isAxiosError(e))
//       const error = e as AxiosError<IAuthError>;
//       console.log(error.response?.status);
//       console.log(thunkAPI.rejectWithValue(error.response?.status));
//       return thunkAPI.rejectWithValue(error.response?.status);
//     }
//   },
// );
export {};
