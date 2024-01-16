import { Box, Skeleton, Typography } from '@mui/material'
import React from 'react'
import { ImageWithFallback } from 'src/components/image_with_fallback'
import { IMovie } from 'src/types/movie'

interface IProp {
  loading: boolean
  data: IMovie[]
}

const BoxCard = ({ loading, data }: IProp) => {
  return (
    <React.Fragment>
      {loading ? (
        <Box className={'w-full flex flex-col gap-4'}>
          {new Array(5).fill('0').map((item, index) => (
            <Box className='flex items-center gap-2' key={item + index}>
              <Skeleton variant='rectangular' width={50} height={50} />
              <Skeleton variant='text' width={200} sx={{ fontSize: '1rem' }} />
            </Box>
          ))}
        </Box>
      ) : (
        <Box className={'w-full flex flex-col gap-4'}>
          {data.slice(0, 7).map((item) => (
            <Box className='flex items-center gap-2' key={item.id}>
              <ImageWithFallback
                style={{
                  width: '60px',
                  height: '60px'
                }}
                alt={item.name}
                src={'https://vntravel.org.vn/uploads/images/2023/11/07/press-teaser-kah-poster-1699344301.jpg'}
              />
              <Typography>Tết ở làng địa ngục</Typography>
            </Box>
          ))}
        </Box>
      )}
    </React.Fragment>
  )
}

export default BoxCard
