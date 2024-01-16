import { Box, Divider, Typography } from '@mui/material'
import { useEffect } from 'react'
import { categoryList } from 'src/constants/asset'
import { useQuery } from 'src/hooks/use_query'
import { useIsRequestPending } from 'src/hooks/use_status'
import { useAppDispatch, useAppSelector } from 'src/redux_store'
import { getMovies } from 'src/redux_store/movie/movie_action'
import FilterSearchPage from './filter'
import BoxContent from './outstanding'

const Search = () => {
  const dispatch = useAppDispatch()
  const searchParam = useQuery()

  const category = searchParam.get('category')
  const nation = searchParam.get('nation')

  const hasCategoryInList = category ? categoryList.find((e) => e.toLowerCase() === category.toLowerCase()) : false

  const { data } = useAppSelector((state) => state.movieSlice)

  const isLoading = useIsRequestPending('movies', 'getMovies')

  useEffect(() => {
    dispatch(getMovies())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box className='flex flex-1 flex-col h-full p-2 gap-4'>
      <FilterSearchPage />
      {hasCategoryInList ? (
        <Box className='flex justify-between items-center border-l-4 border-solid border-[#de3130] px-2'>
          <Typography className='text-2xl font-bold uppercase'>{category}</Typography>
        </Box>
      ) : (
        <Divider>
          <Typography className='text-2xl font-bold uppercase'>{nation ? `Phim ${nation}` : category}</Typography>
        </Divider>
      )}

      <BoxContent loading={isLoading} data={data} />
    </Box>
  )
}

export default Search
