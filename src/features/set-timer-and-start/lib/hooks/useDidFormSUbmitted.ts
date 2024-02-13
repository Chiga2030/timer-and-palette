import { FormEvent, } from 'react'
import { useDispatch, } from 'react-redux'
import { runTimer, setTimer, } from '../../../../entities/timer/model/timerSlice'


export const  useDidFormSUbmitted = () => {
  const dispatch = useDispatch()

  const didFormSUbmitted = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const minutes = Number(formData.get('minutes'))
    const SECONDS_PER_MINUTE = 60

    dispatch(setTimer(minutes * SECONDS_PER_MINUTE))
    dispatch(runTimer())
  }


  return { didFormSUbmitted, }
}
