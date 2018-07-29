import axios from "axios";

import {
  GET_ERRORS,
  GET_POST,
  GET_POSTS,
  POST_LOADING,
  ADD_POST,
  DELETE_POST
} from "./types";

// Add post
export const addPost = postData => dispatch => {
  axios
    .post("/api/posts", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.errors
      })
    );
};
