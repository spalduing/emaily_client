import axios from "axios";

import { FETCH_USER } from "./types";

// // Common/intuitive way of implementing this function/
// export const fetchUser = () => {
//   return function (dispatch) {
//     axios
//       .get("/api/current_user")
//       .then((res) => dispatch({ type: FETCH_USER, payload: res.data }));
//   };
// };

// Reduced version of the above implementation.
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

// // A even more reduced version of the above implementation.
// export const fetchUser = () => async (dispatch) => {
//   dispatch({ type: FETCH_USER, payload: await axios.get("/api/current_user").data });
// };
