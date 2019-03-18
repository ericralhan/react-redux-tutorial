import {
  ADD_ARTICLE,
  FOUND_BAD_WORD,
  DATA_LOADED,
  API_ERRORED
} from '../constants/action-types';

const initialState = {
  articles: [],
  remoteArticles: [],
  message: '',
  apiError: ''
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      message: ''
    });
  }

  if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      message: action.payload
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload),
      apiError: ''
    });
  }

  if (action.type === API_ERRORED) {
    return Object.assign({}, state, {
      apiError: action.payload
    });
  }

  return state;
}

export default rootReducer;
