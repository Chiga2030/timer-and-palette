import { ReactNode, } from 'react'
import { Menu, } from '../../entities/menu'


interface Props {
  children: ReactNode
}


export const MainContainer = ({ children, }: Props): JSX.Element => {
  return (
    <>
      <Menu />

      {children}
    </>
  )
}
