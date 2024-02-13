import { Timer, } from '../../entities/timer'
import { TimerInput, } from '../../features/set-timer-and-start'


export const TimerWidget = (): JSX.Element => {
  return (
    <>
      <h1>Таймер</h1>

      <TimerInput />

      <Timer />
    </>
  )
}
