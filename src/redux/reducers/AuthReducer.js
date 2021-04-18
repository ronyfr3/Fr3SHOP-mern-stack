// import jwt from "jsonwebtoken";

// import {
//   SIGN_IN_FAILURE,
//   SIGN_IN_REQUEST,
//   SIGN_IN_SUCCESS,
//   SIGN_UP_FAILURE,
//   SIGN_UP_REQUEST,
//   SIGN_UP_SUCCESS,
//   SIGN_OUT_FAILURE,
//   SIGN_OUT_REQUEST,
//   SIGN_OUT_SUCCESS,
// } from "../constants/AuthContext";

// export const isValidToken = (token) => {
//   let decoded = jwt.decode(token);
//   return decoded;
// };
// const initState = {
//   currentUser: localStorage.getItem("USER-TOKEN")
//     ? isValidToken(localStorage.getItem("USER-TOKEN"))
//     : null,
//   token: localStorage.getItem("USER-TOKEN")
//     ? localStorage.getItem("USER-TOKEN")
//     : null,
//   error: "",
//   loading: false,
//   isAuthenticated: false,
// };
// // console.log(localStorage.getItem("USER-TOKEN"))//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdhN2VkZTU3NGJiZTJhMzA5M2ZkMjAiLCJpYXQiOjE2MTg2NDMyMzksImV4cCI6MTYxODY0NjgzOX0.JAJjCIU8ZtHfVw8xch95pa1tuOolWi85lrH2G5_odT8
// // console.log(isValidToken(localStorage.getItem("USER-TOKEN")))//{_id: "607a7ede574bbe2a3093fd20", iat: 1618643239, exp: 1618646839}

// export const AuthReducer = function (state = initState, action) {
//   switch (action.type) {
//     case SIGN_IN_REQUEST:
//     case SIGN_UP_REQUEST:
//     case SIGN_OUT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         isAuthenticated: false,
//       };
//     case SIGN_IN_FAILURE:
//     case SIGN_UP_FAILURE:
//     case SIGN_OUT_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//         currentUser: null,
//         isAuthenticated: false,
//       };
//     case SIGN_UP_SUCCESS:
//     case SIGN_IN_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         token: action.payload.token,
//         currentUser: action.payload.user,
//         isAuthenticated: true,
//       };
//     case SIGN_OUT_SUCCESS:
//       localStorage.removeItem("USER-TOKEN");
//       return {
//         ...state,
//         isAuthenticated: false,
//         loading: false,
//         currentUser: null,
//         token: "",
//       };
//     default:
//       return { ...state };
//   }
// };
