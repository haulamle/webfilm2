import { createAsyncThunk } from '@reduxjs/toolkit'
import client from 'src/clients/https'
import { INews } from 'src/types/news'

export const getNews = createAsyncThunk<INews[], void>('news/getNews', async (_, { rejectWithValue }) => {
  try {
    const data = await client.getNews()
    return data
  } catch (error: any) {
    return rejectWithValue(error)
  }
})
