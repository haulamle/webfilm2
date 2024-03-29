import { Box, Divider } from '@mui/material'
import { useEffect } from 'react'
import SlideMovie from 'src/components/slide_movie'
import { useIsRequestPending } from 'src/hooks/use_status'
import { useAppDispatch, useAppSelector } from 'src/redux_store'
import { getMovies } from 'src/redux_store/movie/movie_action'
import BoxDetail from './box_detail'
import BoxEvaluate from './box_evaluate'
import BoxInformation from './box_info'
import SkeletonDetail from './skeleton_detail'

const Detail = () => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.movieSlice)
  const isLoading = useIsRequestPending('movies', 'getMovies')

  const fetchAPI = () => {
    dispatch(getMovies())
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  if (isLoading) return <SkeletonDetail />

  return (
    <Box className='flex flex-1 flex-col h-auto py-4 gap-2'>
      <BoxInformation />
      <Divider
        sx={{
          background: '#fff'
        }}
      />
      <Box className='w-full aspect-video'>
        <iframe
          className='w-full h-full'
          src='https://www.youtube.com/embed/G0S6S9Sks70?si=vGJL4sUtviA5qLJP'
          title='YouTube video player'
          allowFullScreen
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        />
      </Box>
      <Divider
        sx={{
          background: '#fff'
        }}
      />
      <BoxDetail />
      <Divider
        sx={{
          background: '#fff'
        }}
      />
      <SlideMovie
        title='Phim tương tự'
        category='Phim tương tự'
        data={data}
        loading={isLoading}
        isOutstanding={false}
        isShowName={false}
        isControl={false}
      />
      <Box className=' max-h-[800px] overflow-y-auto flex'>
        <BoxEvaluate />
      </Box>
    </Box>
  )
}

export default Detail
