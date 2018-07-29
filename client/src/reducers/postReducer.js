import {
  GET_POST,
  GET_POSTS,
  POST_LOADING,
  ADD_POST,
  DELETE_POST
} from "../action/types";

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
