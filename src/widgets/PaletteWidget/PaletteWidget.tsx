import { Palette, } from '../../entities/palette'
import { AddColorToPaletteButton, } from '../../features/add-color-to-palette'


export const PaletteWidget = (): JSX.Element => {
  return (
    <>
      <h1>Палитра</h1>

      <AddColorToPaletteButton />

      <Palette />
    </>
  )
}
