import { useDispatch, } from 'react-redux'
import { changeColor, } from '../../model/paletteSlice'
import { ColorItemStatus, } from '../../model/types'
import { ChangeEvent, } from 'react'


export const useDidColorChanged = () => {
  const dispatch = useDispatch()

  const didColorChanged = (id: string, status: ColorItemStatus, event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    dispatch(changeColor({
      id,
      status,
      value,
    }))
  }

  return { didColorChanged, }
}
