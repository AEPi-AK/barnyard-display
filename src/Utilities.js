export function timeRemaining({phaseTime, timeSincePhaseStart}) {
  const secondsRemaining = Math.round(Number(phaseTime) - Number(timeSincePhaseStart))
  return secondsRemaining < 10 ? `0:0${secondsRemaining}` : secondsRemaining
}
