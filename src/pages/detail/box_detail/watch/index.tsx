import { Box, Typography } from '@mui/material'
import React from 'react'

const Watch = () => {
  return (
    <Box className='flex flex-col py-4 gap-4'>
      <Typography>Chọn Tập phim :</Typography>
      <Box className='flex flex-wrap gap-4'>
        {Array.from({ length: 12 }, (_, i) => i).map((item) => (
          <Box
            key={item.toString()}
            padding={'6px 10px'}
            fontSize={'12px'}
            fontWeight={600}
            className='bg-[#808080] rounded text-white cursor-pointer hover:bg-[#0084ff]'
          >
            Tập {item + 1}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Watch
