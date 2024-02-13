import { Color, } from '../../model/types'
import { memo, useEffect, useRef, } from 'react'
import { useDidColorStatusChanged, } from '../../lib/hooks/useDidColorStatusChanged'
import styles from './PaletteItem.module.css'
import { useDidColorChanged, } from '../../lib/hooks/useDidColorChanged'
import { useDidColorDeleted, } from '../../lib/hooks/useDidColorDeleted'


interface Props extends Color {}


export const PaletteItem = memo(({
  id,
  value,
  status,
}: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { didColorChanged, } = useDidColorChanged()
  const { didColorStatusChanged, } = useDidColorStatusChanged()
  const { didColorDeleted, } = useDidColorDeleted()

  useEffect(() => {
    /**
     * Открываем пикер по умолчанию при добавлению нового цвета в палитру.
     */
    if (status === 'new') {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.click()
        }
      }, 0)
    }
  }, [ status, ])


  useEffect(() => {
    /**
     * Обновляем статус, что бы в сторе не висели не актуальные данные.
     */
    return () => didColorStatusChanged(id, 'picked')
  }, [ didColorStatusChanged, id, ])


  return (
    <label htmlFor={`input-${id}`} className={styles.label} style={{ backgroundColor: value, }}>

      <button
        onClick={didColorDeleted.bind(null, id)}
        title={'удалить из палитры'}
        type={'button'}
        className={styles.closeButton}
      >
        X
      </button>

      <input
        id={`input-${id}`}
        className={styles.input}
        ref={inputRef}
        value={value}
        type={'color'}
        onChange={didColorChanged.bind(null, id, 'picked')}
      />
    </label>
  )
})
