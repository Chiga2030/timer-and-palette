import {  createSlice, } from '@reduxjs/toolkit'
import type {  PayloadAction,  } from '@reduxjs/toolkit'
import { Seconds, } from './types'


type TimerStatus = 'new' | 'run' | 'stop'

interface State {
  value: Seconds
  status: TimerStatus
}


const initialState: State = {
  status: 'new',
  value: 0,
}


export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    runTimer: state => {
      state.status = 'run'
    },

    stopTimer: state => {
      state.status = 'stop'
    },

    setTimer: (state, action: PayloadAction<Seconds>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTimer, runTimer, stopTimer, } = timerSlice.actions
