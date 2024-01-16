import { createAsyncThunk } from '@reduxjs/toolkit'
import client from 'src/clients/https'
import { IMovie } from 'src/types/movie'

export const getMovies = createAsyncThunk<IMovie[], void>('movies/getMovies', async (_, { rejectWithValue }) => {
  try {
    const data = await client.getMovies()
    return data
  } catch (error: any) {
    return rejectWithValue(error)
  }
})
