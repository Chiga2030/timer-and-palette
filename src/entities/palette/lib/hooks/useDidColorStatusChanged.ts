import { useDispatch, } from 'react-redux'
import { changeColorStatus, } from '../../model/paletteSlice'
import { ColorItemStatus, } from '../../model/types'
import { useCallback, } from 'react'


export const useDidColorStatusChanged = () => {
  const dispatch = useDispatch()

  const didColorStatusChanged = useCallback((id: string, status: ColorItemStatus) => {
    dispatch(changeColorStatus({
      id,
      status,
    }))
  }, [ dispatch, ])

  return { didColorStatusChanged, }
}
