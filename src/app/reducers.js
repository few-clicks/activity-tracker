import { DECREMENT, INCREMENT, SET_TEXT } from './actions';

export const counterReducer = (state = { value: 0 }, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const inputReducer = (state = { text: '' }, action = {}) => {
  switch (action.type) {
    case SET_TEXT:
      return { ...state, text: action.payload.text };
    default:
      return state;
  }
};
