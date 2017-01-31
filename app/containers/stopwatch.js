import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { startTimer, stopTimer, saveTime, clearTime } from '../actions/stopwatch'
import { _formatTime } from '../helpers/stopwatch'

require('./stopwatch.css')

class Stopwatch extends Component {
  constructor (props) {
    super(props)
    this._handleClickStart = this._handleClickStart.bind(this)
    this._handleClickStop = this._handleClickStop.bind(this)
    this._handleClickSave = this._handleClickSave.bind(this)
    this._handleClickClear = this._handleClickClear.bind(this)
    this.counter = null
  }

  _handleClickStart () {
    if (this.props.recording === true) {
      return
    }

    this.counter = setInterval(this.props.onStartClick, 1000)
  }

  _handleClickStop () {
    clearInterval(this.counter)
    this.props.onStopClick()
  }

  _handleClickSave () {
    this.props.onSaveClick()
  }

  _handleClickClear () {
    clearInterval(this.counter)
    this.props.onClearClick()
  }

  render () {
    const { savedTimes, secondsElapsed, recording } = this.props
    const laps = savedTimes.map((time, index) =>
      <li className='stopwatch__lap' key={index}>Lap {index + 1} {time}</li>
    )

    return (
      <div className='stopwatch'>
        <h1 className='stopwatch__time'>{_formatTime(secondsElapsed)}</h1>
        <button className='stopwatch__btn' onClick={this._handleClickStart} disabled={recording}>start</button>
        <button className='stopwatch__btn' onClick={this._handleClickStop} disabled={!recording}>stop</button>
        <button className='stopwatch__btn' onClick={this._handleClickSave}>save</button>
        <button className='stopwatch__btn' onClick={this._handleClickClear}>clear</button>
        <ul className='stopwatch__laps'>{laps}</ul>
      </div>
    )
  }
}

Stopwatch.propTypes = {
  recording: PropTypes.bool.isRequired,
  secondsElapsed: PropTypes.number.isRequired,
  savedTimes: PropTypes.array.isRequired,
  onStartClick: PropTypes.func.isRequired,
  onStopClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { recording, secondsElapsed, savedTimes } = state

  return {
    recording,
    secondsElapsed,
    savedTimes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: () => {
      dispatch(startTimer())
    },
    onSaveClick: () => {
      dispatch(saveTime())
    },
    onStopClick: () => {
      dispatch(stopTimer())
    },
    onClearClick: () => {
      dispatch(clearTime())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stopwatch)
