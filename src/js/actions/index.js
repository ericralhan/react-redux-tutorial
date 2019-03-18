// src/js/actions/index.js
import {
  ADD_ARTICLE,
  FOUND_BAD_WORD,
  DATA_REQUESTED
} from '../constants/action-types';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function foundBadWords(payload) {
  return { type: FOUND_BAD_WORD, payload };
}

export function getData() {
  return { type: DATA_REQUESTED };
  /* redux-thunk way
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'DATA_LOADED', payload: json });
      });
  };
 */
}
