import { Box, Skeleton } from '@mui/material'
import React from 'react'
import CardMovie from 'src/components/card_movie'
import PaginationCPN from 'src/components/pagination'
import { IMovie } from 'src/types/movie'

interface IProp {
  loading: boolean
  data: IMovie[]
}

const BoxContent = ({ loading, data }: IProp) => {
  return (
    <Box className='flex flex-col gap-4'>
      <Box className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
        {loading
          ? new Array(12).fill('0').map((item, index) => (
              <Box
                key={item + index}
                className='backdrop-blur-lg backdrop-saturate-180 rounded-lg border bg-[#eeeeee] border-white/10 p-2 drop-shadow-lg flex flex-col items-start w-[160px] cursor-pointer'
              >
                <Skeleton variant='rectangular' height={200} className='w-full' />
                <Skeleton animation='wave' width='80%' />
                <Skeleton animation='wave' width='50%' />
              </Box>
            ))
          : data.map((item) => (
              <React.Fragment key={item.id}>
                <CardMovie />
              </React.Fragment>
            ))}
      </Box>
      <PaginationCPN
        handleChangePage={() => {}}
        page={5}
        totalPage={5}
        sx={{ display: 'flex', justifyContent: 'center', py: 1, mt: 1 }}
      />
    </Box>
  )
}

export default BoxContent
