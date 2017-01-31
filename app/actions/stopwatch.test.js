import {
  startTimer, stopTimer, saveTime, clearTime,
  START_TIMER, STOP_TIMER, SAVE_TIME, CLEAR_TIME
} from './stopwatch'

describe('stopwatch actions', () => {
  it('should fire an action to start the stopwatch timer', () => {
    const expectedAction = {
      type: START_TIMER
    }
    expect(startTimer()).toEqual(expectedAction)
  })

  it('should fire an action to stop the stopwatch timer', () => {
    const expectedAction = {
      type: STOP_TIMER
    }
    expect(stopTimer()).toEqual(expectedAction)
  })

  it('should fire an action to save the current time elapsed', () => {
    const expectedAction = {
      type: SAVE_TIME
    }
    expect(saveTime()).toEqual(expectedAction)
  })

  it('should fire an action to clear the current time elapsed', () => {
    const expectedAction = {
      type: CLEAR_TIME
    }
    expect(clearTime()).toEqual(expectedAction)
  })
})
