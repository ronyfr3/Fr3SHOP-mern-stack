// import * as api from "../api";
// import axios from 'axios'
// import {
//     SIGN_IN_FAILURE,
//     SIGN_IN_REQUEST,
//     SIGN_IN_SUCCESS,
//     SIGN_UP_FAILURE,
//     SIGN_UP_REQUEST,
//     SIGN_UP_SUCCESS,
//     SIGN_OUT_FAILURE,
//     SIGN_OUT_REQUEST,
//     SIGN_OUT_SUCCESS,
//   } from "../constants/AuthContext";

// //   Sign up action creators
// // const signUpRequest = () => {
// //   return {
// //     type: SIGN_UP_REQUEST,
// //   };
// // };
// // const signUpSuccess = (user) => {
// //   return {
// //     type: SIGN_UP_SUCCESS,
// //     payload: {
// //       user,
// //     },
// //   };
// // };
// // const signUpFailure = (error) => {
// //   return {
// //     type: SIGN_UP_FAILURE,
// //     payload: error,
// //   };
// // };


//   export const signUp = (user, history) => async (dispatch) => {
//       dispatch({
//           type:SIGN_UP_REQUEST
//       })
//     try {
//       const { data } = await api.createUser(user);
  
//       dispatch({ type: SIGN_UP_SUCCESS, payload: data });
//       history.push("/login");
//     } catch (error) {
//       dispatch({
//         type:  SIGN_UP_FAILURE,
//         payload: error
//       });
//     }
//   };
// //   export const signUp = (user, history) => {
// //     return function (dispatch) {
// //       dispatch(signUpRequest());
// //       axios({
// //         method: "post",
// //         url: "/signUp",
// //         data: user,
// //       })
// //         .then((response) => {
// //           const { data } = response.data;
// //           dispatch(signUpSuccess(data));
// //           history.push("/");
// //         })
// //         .catch((error) => {
// //           console.log(error);
// //           dispatch(signUpFailure(error));
// //         });
// //     };
// // };

// export const signIn = (useData, history) => async (dispatch) => {
//     dispatch({
//         type:SIGN_IN_REQUEST
//     })
//   try {
//     axios({
//         method: "post",
//         url: "http://localhost:5000/auth/user/signIn",
//         data: useData,
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("USER-TOKEN")}`,
//         },
//       })
//         .then((response) => {
//           const { token } = response.data;
//           localStorage.setItem("USER-TOKEN", token);
//           dispatch({
//               type:SIGN_IN_SUCCESS,
//               payload: token
//           });
//           history.push("/");
//         })
//   } catch (error) {
//     dispatch({
//       type:  SIGN_IN_FAILURE,
//       payload: error
//     });
//   }
// };
// // Sign in action creators
// // const signInRequest = () => {
// //   return {
// //     type: SIGN_IN_REQUEST,
// //   };
// // };
// // const signInSuccess = (token) => {
// //   return {
// //     type: SIGN_IN_SUCCESS,
// //     payload: {
// //       token,
// //     },
// //   };
// // };
// // const signInFailure = (error) => {
// //   return {
// //     type: SIGN_IN_FAILURE,
// //     payload: error,
// //   };
// // };
// // export const signIn = (payload, history) => {
// //     return function (dispatch) {
// //       dispatch(signInRequest);
// //       axios({
// //         method: "post",
// //         url: "http://localhost:5000/auth/user/signIn",
// //         data: payload,
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("USER-TOKEN")}`,
// //         },
// //       })
// //         .then((response) => {
// //           const { token } = response.data;
// //           localStorage.setItem("USER-TOKEN", token);
// //           dispatch(signInSuccess(token));
// //           history.push("/home");
// //         })
// //         .catch((error) => {
// //           dispatch(signInFailure(error));
// //         });
// //     };
// //   };



// //sign out action creators
// // export const signOutRequest = function () {
// //     return {
// //       type: SIGN_OUT_REQUEST,
// //     };
// //   };
  
// //   export const signOutSuccess = function () {
// //     return {
// //       type: SIGN_OUT_SUCCESS,
// //     };
// //   };
  
// //   export const signOutFailure = function () {
// //     return {
// //       type: SIGN_OUT_FAILURE,
// //     };
// //   };
// // export const signOut = function (history) {
// //     return function (dispatch) {
// //       dispatch(signOutRequest());
// //       localStorage.clear();
// //       history.push("/signin");
// //       if (localStorage.getItem("USER_TOKEN")) {
// //         dispatch(signOutFailure());
// //       } else {
// //         dispatch(signOutSuccess());
// //       }
// //     };
// //   };

// export const signOut = (history) => async (dispatch) => {
//     dispatch({
//         type:SIGN_OUT_REQUEST
//     })
//     localStorage.clear();
//           history.push("/login");
//           if (localStorage.getItem("USER_TOKEN")) {
//             dispatch({
//                 type:SIGN_OUT_FAILURE
//             });
//           } else {
//             dispatch({
//                 type:SIGN_OUT_SUCCESS
//             });
//           }
//   };

// // export const signOut = function (history) {
// //         return function (dispatch) {
// //           dispatch(signOutRequest());
// //           localStorage.clear();
// //           history.push("/signin");
// //           if (localStorage.getItem("USER_TOKEN")) {
// //             dispatch(signOutFailure());
// //           } else {
// //             dispatch(signOutSuccess());
// //           }
// //         };
// //       };