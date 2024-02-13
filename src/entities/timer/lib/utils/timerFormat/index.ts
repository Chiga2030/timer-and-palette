import { Seconds, } from '../../../model/types'


export const timerFormat = (time: Seconds): string => {
  const minutes = Math.floor(time / 60)
  const seconds = time - (minutes * 60)

  let formattedMinutes = minutes.toString()
  let formattedSeconds = seconds.toString()

  if (formattedMinutes.length < 2) {
    formattedMinutes = 0 + formattedMinutes
  }

  if (formattedSeconds.length < 2) {
    formattedSeconds = 0 + formattedSeconds
  }

  return `${formattedMinutes}:${formattedSeconds}`
}
