import { useDidFormSUbmitted, } from '../../lib/hooks/useDidFormSUbmitted'


export const TimerInput = (): JSX.Element => {
  const { didFormSUbmitted, } = useDidFormSUbmitted()

  return  (
    <form onSubmit={didFormSUbmitted}>
      <label>
        {`Время в минутах: `}
        <input
          name={'minutes'}
          min={0}
          type={'number'}
        />
      </label>
    </form>
  )
}
