import { useDidButtonClicked, } from '../../lib/hooks/useDidButtonClicked'
import styles from './AddColorToPaletteButton.module.css'

export const AddColorToPaletteButton = (): JSX.Element => {
  const { didClicked, } = useDidButtonClicked()

  return (
    <button type={'button'} onClick={didClicked} className={styles.button}>
      Добавить цвет
    </button>
  )
}
