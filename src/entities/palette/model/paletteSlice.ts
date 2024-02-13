import { createSlice, } from '@reduxjs/toolkit'
import type { PayloadAction, } from '@reduxjs/toolkit'
import { Color, } from './types'


export interface CounterState {
  colorList: Color[]
}

const initialState: CounterState = {
  colorList: [],
}


export const paletteSlice = createSlice({
  name: 'palette',
  initialState,
  reducers: {
    addColor: (state, action: PayloadAction<Color>) => {
      state.colorList.push(action.payload)
    },

    changeColor: (state, action: PayloadAction<Color>) => {
      const item = state.colorList.find(color => color.id === action.payload.id)

      if (!item) {
        return
      }

      const { id, status, value, } = action.payload

      item.id = id
      item.status = status
      item.value = value
    },

    changeColorStatus: (state, action: PayloadAction<Omit<Color, 'value'>>) => {
      const item = state.colorList.find(color => color.id === action.payload.id)

      if (!item) {
        return
      }

      const { id, status,  } = action.payload

      item.id = id
      item.status = status
    },

    deleteColor: (state, action: PayloadAction<string>) => {
      state.colorList = state.colorList.filter(item => item.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addColor, changeColor, changeColorStatus, deleteColor, } = paletteSlice.actions
