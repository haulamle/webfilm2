import { Box, Typography } from '@mui/material'
import { ImageWithFallback } from 'src/components/image_with_fallback'

const CardPerformer = () => {
  return (
    <Box className='flex gap-2 items-center text-white'>
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
        <Typography fontWeight={500} fontSize={'14px'}>
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
