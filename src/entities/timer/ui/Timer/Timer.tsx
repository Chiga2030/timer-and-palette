import { useEffect, } from 'react'
import { useAppSelector, } from '../../../../app/store/hooks'
import { useDispatch, } from 'react-redux'
import { setTimer, stopTimer, } from '../../model/timerSlice'
import { timerFormat, } from '../../lib/utils/timerFormat'


export const Timer = (): JSX.Element => {
  const timerValue = useAppSelector(store => store.timer.value)
  const timerStatus = useAppSelector(store => store.timer.status)

  const dispatch = useDispatch()

  useEffect(() => {
    if (timerValue <= 0 && timerStatus === 'run') {
      dispatch(stopTimer())
      return
    }

    const timeoutId = setTimeout(() => {
      if (timerStatus === 'run') {
        dispatch(setTimer(timerValue - 1))
      }
    }, 1000)


    return () => {
      clearTimeout(timeoutId)
    }
  }, [
    dispatch,
    timerStatus,
    timerValue,
  ])


  if (timerStatus === 'stop') {
    return (<div>Готово</div>)
  }

  return (
    <div>
      <span>Обратный отсчет: </span>
      {timerFormat(timerValue)}
    </div>
  )
}
