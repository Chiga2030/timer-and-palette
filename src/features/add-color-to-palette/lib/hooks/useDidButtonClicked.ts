import { nanoid, } from 'nanoid'
import { useAppDispatch, } from '../../../../app/store/hooks'
import { addColor, } from '../../../../entities/palette'


export const useDidButtonClicked = () => {
  const dispatch = useAppDispatch()

  const didClicked = () => dispatch(addColor({
    id: nanoid(),
    status: 'new',
    value: '#6400ff',
  }))

  return { didClicked, }
}
