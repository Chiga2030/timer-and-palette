import { useAppSelector, } from '../../../../app/store/hooks'
import { PaletteItem, } from '../PaletteItem/PaletteItem'
import { Wrapper, } from '../Wrapper/Wrapper'


export const Palette = (): JSX.Element => {
  const colorList = useAppSelector(store => store.palette.colorList)

  if (colorList.length < 1) {
    return (
      <Wrapper>
        Палитра пустая, не добавлено ни одного цвета.
      </Wrapper>
    )
  }


  return (
    <Wrapper>
      {colorList.map(item => (
        <PaletteItem {...item} key={item.id} />
      ))}
    </Wrapper>
  )
}
