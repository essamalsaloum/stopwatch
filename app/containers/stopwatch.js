import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateSeconds, saveTime } from '../actions/stopwatch';

function _formatTime (secondsElapsed) {
  const minute  = Math.floor(secondsElapsed / 60);
  const seconds = ('0' + secondsElapsed % 60).slice(-2);

  return minute + ':' + seconds;
}

class Stopwatch extends React.Component {
  constructor (props) {
    super(props);
    this._handleClickStart = this._handleClickStart.bind(this);
    this._handleClickStop  = this._handleClickStop.bind(this);
    this.counter           = null;
  }

  _handleClickStart () {
    this.counter = setInterval(this.props.onStartClick, 1000);
  };

  _handleClickStop () {
    clearInterval(this.counter);
  };

  render() {
    console.log(this);
    const { onStartClick, secondsElapsed } = this.props;

    return (
      <div>
        <h1>{_formatTime(secondsElapsed)}</h1>
        <button onClick={this._handleClickStart}>start</button>
        <button onClick={this._handleClickStop}>stop</button>
        <button>save</button>
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
      dispatch(updateSeconds())
    },
    onSaveClick: () => {
      dispatch(saveTime())
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stopwatch);
