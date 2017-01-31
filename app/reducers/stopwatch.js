import { START_TIMER, STOP_TIMER, SAVE_TIME } from '../actions/stopwatch'
import { _formatTime } from '../helpers/stopwatch'

const initialState = {
  recording: false,
  secondsElapsed: 0,
  savedTimes: []
}

function startTimer (state) {
  if (typeof state.secondsElapsed !== 'number') {
    return
  }

  const addedSecond = state.secondsElapsed + 1

  return Object.assign({}, state, {recording: true, secondsElapsed: addedSecond})
};

function stopTimer (state) {
  return Object.assign({}, state, {recording: false})
}

function saveTime (state) {
  if (typeof state.secondsElapsed !== 'number') {
    return
  }

  const newLap = _formatTime(state.secondsElapsed)

  return Object.assign({}, state, {savedTimes: state.savedTimes.concat(newLap)})
}

export default function stopwatch (state = initialState, action = {}) {
  switch (action.type) {
    case START_TIMER:
      return startTimer(state)

    case STOP_TIMER:
      return stopTimer(state)

    case SAVE_TIME:
      return saveTime(state)

    default:
      return state
  }
};
