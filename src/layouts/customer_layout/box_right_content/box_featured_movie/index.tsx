import StarIcon from '@mui/icons-material/Star'
import { Box, Skeleton, Typography } from '@mui/material'
import _ from 'lodash'
import { useEffect } from 'react'
import EmptyMessage from 'src/components/empty_message'
import ErrorMessage from 'src/components/error_message'
import { ImageWithFallback } from 'src/components/image_with_fallback'
import { useIsRequestError, useIsRequestPending } from 'src/hooks/use_status'
import { useAppDispatch, useAppSelector } from 'src/redux_store'
import { getMovies } from 'src/redux_store/movie/movie_action'

const BoxFeaturedMovie = () => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.movieSlice)

  const isLoading = useIsRequestPending('movies', 'getMovies')
  const isError = useIsRequestError('movies', 'getMovies')

  const fetchAPI = () => {
    dispatch(getMovies())
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  if (isLoading)
    return (
      <Box className='flex flex-col gap-2'>
        {new Array(5).fill('0').map((item, index) => (
          <Box className={'flex gap-2'} key={item + index}>
            <Skeleton variant='rectangular' width={100} height={100} />
            <Box>
              <Skeleton variant='text' width={140} />
              <Skeleton variant='text' />
              <Skeleton variant='text' />
            </Box>
          </Box>
        ))}
      </Box>
    )

  if (isError)
    return (
      <Box className={'flex justify-center'}>
        <ErrorMessage onClick={fetchAPI} />
      </Box>
    )

  return (
    <Box className={`flex flex-col gap-2 flex-1`}>
      {_.isEmpty(data) ? (
        <EmptyMessage />
      ) : (
        data.map((item) => (
          <Box key={item.id} className='w-ful flex gap-2 items-center'>
            <ImageWithFallback
              src='https://i.pinimg.com/736x/c5/40/01/c540018ca1c7b93cb1fbc218ea0c73a7.jpg'
              alt='avatar'
              className='w-[100px] h-[100px] object-cover'
            />
            <Box className='flex-1 overflow-hidden'>
              <Typography className='whitespace-pre text-ellipsis overflow-hidden' fontSize={18}>
                Chàng quỷ của tôi
              </Typography>
              <Typography component={'i'} fontSize={'14px'}>
                Tập 12 Vietsup
              </Typography>
              <Box className='flex gap-2 items-center mt-1'>
                <Box className='flex items-center gap-2 px-1 py-0.5 border border-[#cecece] border-solid rounded'>
                  <StarIcon color='disabled' fontSize='small' />
                  <Typography fontSize={'14px'}>9.8</Typography>
                </Box>
                <Typography fontSize={'14px'}>2022</Typography>
              </Box>
            </Box>
          </Box>
        ))
      )}
    </Box>
  )
}

export default BoxFeaturedMovie
