import { Box, Typography } from '@mui/material'
import React from 'react'
import { ImageWithFallback } from 'src/components/image_with_fallback'

const CardPerformer = () => {
  return (
    <Box className='flex gap-2 items-center'>
      <ImageWithFallback
        src='https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-gai-xinh-vn-3.jpg'
        alt='actor'
        style={{
          width: '60px',
          height: '60px',
          objectFit: 'cover'
        }}
      />
      <Box>
        <Typography fontWeight={600} fontSize={'16px'}>
          CardPerformer
        </Typography>
        <Typography fontSize={'13px'} color={'#00000099'}>
          America
        </Typography>
      </Box>
    </Box>
  )
}

export default CardPerformer
