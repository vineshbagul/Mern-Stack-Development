import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING

} from '../constants/actionTypes';

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isloading: true} ;
    case END_LOADING:
      return { ...state, isloading: true} ;
    case FETCH_ALL:
      return {
        ...state.posts,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages:action.payload.numberOfPages,
      };

     case FETCH_BY_SEARCH: 
     return { ...state,posts: action.payload} ;

    case CREATE:
      return { ...state,posts:[...state.posts, action.payload]};
      // after the API call , action.payload is the newly updated post

       // LIKE has same Logic as update function
    case UPDATE:

      return { ...state,posts:state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};


    case LIKE:

      return { ...state,posts:state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};
    
    // We use filter because we keep all post which are NOT equal to action.payload
    case DELETE:
      return { ...state,posts:state.posts.filter((post) => post._id !== action.payload)};

    default:
      return state;
  }
};