import { UPDATE_SECONDS, SAVE_TIME } from '../actions/stopwatch';

const initialState = {
  recording: false,
  secondsElapsed: 0,
  savedTimes: []
};

function updateSeconds (state) {
  if (typeof state.secondsElapsed !== 'number') {
    return;
  }

  const addedSecond = state.secondsElapsed + 1;

  return Object.assign({}, state, {secondsElapsed: addedSecond});
};

export default function stopwatch (state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SECONDS:
      return updateSeconds(state);

    case SAVE_TIME:
      return state;

    default:
      return state;
  }
};
