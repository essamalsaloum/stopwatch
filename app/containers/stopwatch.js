import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { startTimer, stopTimer, saveTime } from '../actions/stopwatch';
import { _formatTime } from '../helpers/stopwatch';

class Stopwatch extends React.Component {
  constructor (props) {
    super(props);
    this._handleClickStart = this._handleClickStart.bind(this);
    this._handleClickStop  = this._handleClickStop.bind(this);
    this._handleClickSave  = this._handleClickSave.bind(this);
    this.counter           = null;
  }

  _handleClickStart () {
    if (this.props.recording === true) {
      return;
    }

    this.counter = setInterval(this.props.onStartClick, 1000);
  }

  _handleClickStop () {
    clearInterval(this.counter);
    this.props.onStopClick();
  }

  _handleClickSave () {
    this.props.onSaveClick();
  }

  render() {
    const { secondsElapsed } = this.props;

    return (
      <div>
        <h1>{_formatTime(secondsElapsed)}</h1>
        <button onClick={this._handleClickStart}>start</button>
        <button onClick={this._handleClickStop}>stop</button>
        <button onClick={this._handleClickSave}>save</button>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  const { recording, secondsElapsed, savedTimes } = state;

  return {
    recording,
    secondsElapsed,
    savedTimes
  }
};

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
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stopwatch);
