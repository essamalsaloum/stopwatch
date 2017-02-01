import React, { PropTypes } from 'react'

export default function LapTimes (props) {
  const { times } = props

  return (
    <ul className='stopwatch__laps'>
      {times.map((time, index) =>
        <li
          key={index}
          className='stopwatch__lap'
        >
          Lap {index + 1}: {time}
        </li>
        )
      }
    </ul>
  )
}

LapTimes.propTypes = {
  times: PropTypes.array.isRequired
}
