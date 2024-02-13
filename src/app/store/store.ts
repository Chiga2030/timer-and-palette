import { configureStore, } from '@reduxjs/toolkit'
import { paletteSlice, } from '../../entities/palette'
import { timerSlice, } from '../../entities/timer/model/timerSlice'


export const store = configureStore({
  reducer: {
    palette: paletteSlice.reducer,
    timer: timerSlice.reducer,
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
