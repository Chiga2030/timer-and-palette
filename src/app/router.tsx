import { createHashRouter, } from 'react-router-dom'
import { MainPage, } from '../pages/MainPage/MainPage'
import { PalettePage, } from '../pages/PalettePage/PalettePage'
import { MainContainer, } from './MainContainer/MainContainer'


export const router = createHashRouter([ {
  path: '/',
  element: <MainContainer><MainPage /></MainContainer>,
}, {
  path: '/palette',
  element: <MainContainer><PalettePage /></MainContainer>,
}, ])
