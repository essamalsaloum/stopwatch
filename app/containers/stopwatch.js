import React from 'react';

export default class Stopwatch extends React.Component {
  render() {
    return (
      <div>
        <h1>00:00</h1>
        <button>start</button>
        <button>stop</button>
        <button>save</button>
      </div>
    )
  }
};