export function _formatTime (secondsElapsed) {
  const minute = Math.floor(secondsElapsed / 60)
  const seconds = ('0' + secondsElapsed % 60).slice(-2)

  return `${minute} : ${seconds}`
}
