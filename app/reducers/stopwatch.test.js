import reducer from './stopwatch'
import { START_TIMER, STOP_TIMER, SAVE_TIME } from '../actions/stopwatch'

const initialState = {
  recording: false,
  secondsElapsed: 0,
  savedTimes: []
}

describe('stopwatch reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState)
  })

  it('should start the stopwatch timer', () => {
    expect(
      reducer(initialState, {type: START_TIMER})
    ).toEqual(
      {
        recording: true,
        secondsElapsed: 1,
        savedTimes: []
      }
    )
  })

  it('should stop the stopwatch timer', () => {
    expect(
      reducer({
        recording: true,
        secondsElapsed: 134,
        savedTimes: []
      }, {type: STOP_TIMER})
    ).toEqual(
      {
        recording: false,
        secondsElapsed: 134,
        savedTimes: []
      }
    )
  })

  it('should save the current elapsed time', () => {
    expect(
      reducer({
        recording: true,
        secondsElapsed: 134,
        savedTimes: []
      }, {type: SAVE_TIME})
    ).toEqual(
      {
        recording: true,
        secondsElapsed: 134,
        savedTimes: ['2:14']
      }
    )
  })

  it('should add current elapsed time to previously saved times', () => {
    expect(
      reducer({
        recording: true,
        secondsElapsed: 156,
        savedTimes: ['2:14']
      }, {type: SAVE_TIME})
    ).toEqual(
      {
        recording: true,
        secondsElapsed: 156,
        savedTimes: ['2:14', '2:36']
      }
    )
  })
})
