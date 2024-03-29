import { Box } from '@mui/material'
import { useEffect } from 'react'
import SlideMovie from 'src/components/slide_movie'
import { useIsRequestPending } from 'src/hooks/use_status'
import { useAppDispatch, useAppSelector } from 'src/redux_store'
import { getMovies } from 'src/redux_store/movie/movie_action'
import { getNews } from 'src/redux_store/news/news_action'
import Content from './content'
import BoxNews from './news'

const Home = () => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.movieSlice)
  const { dataNews } = useAppSelector((state) => state.newsSlice)
  const isLoading = useIsRequestPending('movies', 'getMovies')
  const isLoadingNews = useIsRequestPending('news', 'getNews')

  const fetchAPI = () => {
    Promise.all([dispatch(getMovies()), dispatch(getNews())])
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <Box className='flex flex-1 flex-col py-4'>
      <Box className='w-full'>
        <SlideMovie
          title='Phim nổi bật'
          category='Phim nổi bật'
          data={data}
          loading={isLoading}
          isOutstanding={true}
          isAutoPlay={true}
        />
      </Box>

      <Box className='w-full py-4 flex flex-col gap-4'>
        <Content data={data} title='HOT' loading={isLoading} />
      </Box>

      <Box className='w-full py-4 flex flex-col gap-4'>
        <Content data={data} title='Phim lẻ mới nhất' loading={isLoading} />
      </Box>

      <Box className='w-full py-4 flex flex-col gap-4'>
        <Content data={data} title='Phim bộ mới cập nhật' loading={isLoading} />
      </Box>

      <Box className='w-full py-4 flex flex-col gap-4'>
        <BoxNews loading={isLoadingNews} data={dataNews} />
      </Box>
    </Box>
  )
}

export default Home
