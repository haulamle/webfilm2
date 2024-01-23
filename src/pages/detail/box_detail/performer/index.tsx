import { Box, Typography } from '@mui/material'
import CardPerformer from './card_performer'

const Performer = () => {
  return (
    <Box className='flex flex-col py-4 gap-4 w-full'>
      <Typography className='text-white'>Tác giả</Typography>
      <CardPerformer />
      <Typography className='text-white'>Diễn viên</Typography>
      <Box className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        {new Array(5).fill('0').map((item, index) => (
          <CardPerformer key={item + index} />
        ))}
      </Box>
    </Box>
  )
}

export default Performer
