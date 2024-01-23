import { Avatar, Box, Divider, Typography } from '@mui/material'
import { dataNews } from './data'

const NewsDetail = () => {
  return (
    <Box className='flex flex-1 flex-col h-full p-2'>
      <Box className={'p-2'}>
        <Typography
          className='text-white'
          fontSize={{
            xs: '25px',
            sm: '38px',
            md: '40px'
          }}
        >
          15 bộ phim Netflix được xem nhiều nhất từ trước tới nay
        </Typography>
      </Box>
      <Divider />
      <Box className={'p-2 flex gap-2 items-center'}>
        <Avatar
          alt='avatar'
          src='https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/avatar-gai-xinh-10-2.jpg'
        />
        <Box className='flex flex-col gap-1'>
          <Typography className='text-white'>Admin</Typography>
          <Typography fontSize={'13px'} className='text-[#8a8a8a]'>
            12/01/2024
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        className='text-white'
        dangerouslySetInnerHTML={{
          __html: dataNews
        }}
      ></Box>
    </Box>
  )
}

export default NewsDetail
