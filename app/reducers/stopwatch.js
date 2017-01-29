const initialState = {};

export default function stopwatch (state=initialState, action) {
  switch (action.type) {
    case 'foo':
      return state;
    default:
      return state;
  }
};