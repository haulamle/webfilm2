import { Box, Typography } from '@mui/material'
import React from 'react'
import CardPerformer from './card_performer'

const Performer = () => {
  return (
    <Box className='flex flex-col py-4 gap-4 w-full'>
      <Typography>Tác giả</Typography>
      <CardPerformer />
      <Typography>Diễn viên</Typography>
      <Box className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5'>
        {new Array(5).fill('0').map((item, index) => (
          <CardPerformer key={item + index} />
        ))}
      </Box>
    </Box>
  )
}

export default Performer
