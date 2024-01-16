import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IMovie } from 'src/types/movie'
import { getMovies } from './movie_action'

interface IMovieState {
  nameMovie: string
  data: IMovie[]
}

const initialState: IMovieState = {
  nameMovie: '',
  data: []
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.nameMovie = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
      state.data = action.payload
    })
  }
})

const { actions, reducer } = movieSlice
export const { changeName } = actions
export default reducer
