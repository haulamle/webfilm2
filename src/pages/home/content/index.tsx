import { Box, Skeleton, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardMovie from 'src/components/card_movie'
import { PATH } from 'src/routes/path'
import { IMovie } from 'src/types/movie'
import { goToNextPage } from 'src/utils/common'

interface IProp {
  title: string
  loading: boolean
  data: IMovie[]
}

const Content = ({ title, data, loading }: IProp) => {
  const navigate = useNavigate()

  return (
    <Box className='flex-1 flex flex-col gap-4'>
      <Box className='flex justify-between border-l-4 items-center border-solid border-[#de3130] px-2'>
        <Typography fontSize={'18px'} className='font-bold uppercase text-white'>
          {title}
        </Typography>

        <Box className='flex items-center gap-2'>
          <Box
            className='bg-[#ff0000] z-10 text-white text-[10px] px-2 py-0.5 font-bold cursor-pointer'
            onClick={() => {
              goToNextPage(navigate, `${PATH.search}?category=${title}`)
            }}
          >
            Xem hết
          </Box>
        </Box>
      </Box>
      <Box className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
        {loading
          ? new Array(8).fill('0').map((item, index) => (
              <Box key={item + index} className='w-[150px] p-2 aspect-auto bg-[#bababa] rounded'>
                <Skeleton variant='rectangular' height={200} className='w-full' />
                <Skeleton animation='wave' width='80%' />
                <Skeleton animation='wave' width='50%' />
              </Box>
            ))
          : data.slice(0, 8).map((item) => (
              <React.Fragment key={item.id}>
                <CardMovie />
              </React.Fragment>
            ))}
      </Box>
    </Box>
  )
}

export default Content
