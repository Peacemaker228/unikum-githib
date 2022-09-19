// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { createWrapper, HYDRATE } from 'next-redux-wrapper';
// import authSlice from './reducers/AuthReducer';

// const rootReducer = combineReducers({
//   authSlice,
// });

// export const setupStore = () => {
//   return configureStore({
//     // reducer: {
//     //   cash: cashReducerSlice,
//     //   customer: customerReducer,
//     // },
//     reducer: rootReducer,
//     devTools: true,
//   });
// };

// export type RootStore = ReturnType<typeof rootReducer>;

// export type AppStore = ReturnType<typeof setupStore>;

// export type AppDispatch = AppStore['dispatch'];

// export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });

// // ComponentPage.getServerSideProps = wrapper.getServerSideProps(
// //   ({ dispatch }) =>
// //     async () => {
// //       await dispatch(logout());
// //     },
// // );

// // export default ComponentPage;
export {};
