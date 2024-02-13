import { useDispatch, } from 'react-redux'
import { deleteColor, } from '../../model/paletteSlice'


export const useDidColorDeleted = () => {
  const dispatch = useDispatch()

  const didColorDeleted = (id: string) => {
    dispatch(deleteColor(id))
  }

  return { didColorDeleted, }
}
