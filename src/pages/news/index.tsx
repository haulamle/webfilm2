import { Box, Skeleton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import PaginationCPN from 'src/components/pagination'
import CardNews from './card_news'
import { useAppDispatch, useAppSelector } from 'src/redux_store'
import { useIsRequestPending } from 'src/hooks/use_status'
import { getNews } from 'src/redux_store/news/news_action'

const News = () => {
  const dispatch = useAppDispatch()

  const { dataNews } = useAppSelector((state) => state.newsSlice)

  const isLoadingNews = useIsRequestPending('news', 'getNews')

  useEffect(() => {
    dispatch(getNews())
  }, [])

  return (
    <Box className='flex flex-col gap-4 py-4'>
      <Box className='flex justify-between items-center border-l-4 border-solid border-[#de3130] px-4 '>
        <Typography fontSize={'18px'} className='text-white font-bold uppercase'>
          Tin tức
        </Typography>
      </Box>
      <Box className='grid grid-cols-2 gap-4'>
        {isLoadingNews
          ? new Array(4).fill('0').map((item, index) => (
              <Box className='w-full bg-[#eeeeee] flex flex-col items-center justify-center' key={item + index}>
                <Box className='w-full h-full flex flex-col gap-2'>
                  <Box className='flex gap-2 items-center'>
                    <Skeleton variant='circular' width={40} height={40} />
                    <Skeleton variant='text' width={120} sx={{ fontSize: '1rem' }} />
                  </Box>
                  <Box>
                    <Skeleton variant='rounded' width={'100%'} height={220} />
                    <Skeleton animation='wave' height={40} />
                    <Skeleton animation='wave' height={20} />
                    <Skeleton animation='wave' height={40} />
                  </Box>
                </Box>
              </Box>
            ))
          : dataNews.map((item) => <CardNews data={item} key={item.id} />)}
      </Box>
      <PaginationCPN
        handleChangePage={() => {}}
        loading={isLoadingNews}
        page={2}
        totalPage={5}
        sx={{ display: 'flex', justifyContent: 'center', py: 2, mt: 1 }}
      />
    </Box>
  )
}

export default News
