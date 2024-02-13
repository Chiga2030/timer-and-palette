import { ReactNode } from 'react'
import styles from './Wrapper.module.css'


interface Props {
  children: ReactNode
}


export const Wrapper = ({ children }: Props): JSX.Element => {
  return (
    <div className={ styles.wrapper }>
      { children }
    </div>
  )
}
