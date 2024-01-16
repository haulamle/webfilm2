import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INews } from 'src/types/news'
import { getNews } from './news_action'

interface IMovieState {
  dataNews: INews[]
}

const initialState: IMovieState = {
  dataNews: []
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action: PayloadAction<INews[]>) => {
      state.dataNews = action.payload
    })
  }
})

const { reducer } = movieSlice
// export const {} = actions
export default reducer
