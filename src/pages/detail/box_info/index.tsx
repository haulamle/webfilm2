import { Avatar, Box, Divider, Rating, Typography } from '@mui/material'
import { useState } from 'react'
import { ImageWithFallback } from 'src/components/image_with_fallback'

const categoryList = ['Phim Chính Kịch', 'Phim Cổ Trang', 'Phim Tâm Lý', 'Phim Tình Cảm']

const BoxInformation = () => {
  const [rating, setRating] = useState<number>(9)

  return (
    <Box className='flex flex-col sm:flex-row gap-4 py-2 '>
      <Box display={'flex'} justifyContent={'center'}>
        <ImageWithFallback
          src='https://thanhnien.mediacdn.vn/Uploaded/2014/Pictures20133/CongDong/070313/Iron-man-3-d.jpg'
          alt='avatar'
          className='max-w-[160px] max-h-[260px] object-contain'
        />
      </Box>
      <Box className='flex flex-1 flex-col gap-2 justify-between'>
        <Box>
          <Typography fontSize={'30px'} className='text-white'>
            Câu Chuyện Lúc Nửa Đêm
          </Typography>
          <Typography fontSize={'15px'} className='text-[#888888]'>
            Goosebumps 2023
          </Typography>
        </Box>
        <Typography fontSize={'13px'} className='text-[#888888]'>
          22/08/2022
        </Typography>
        <Box className='flex '>
          <Typography
            padding={'5px 15px 5px 10px'}
            fontSize={'13px'}
            fontWeight={500}
            className='uppercase text-white bg-[#408bea]'
          >
            Full 12/12 Tập Vietsup
          </Typography>
        </Box>
        <Divider
          sx={{
            background: '#fff'
          }}
        />
        <Box className='flex items-center gap-2'>
          <Box className='w-[60px] h-[60px] bg-[#bebebe] grid place-items-center'>
            <Typography className='text-white ' fontSize={'20px'} fontWeight={600}>
              10
            </Typography>
          </Box>
          <Box className='flex flex-col gap-1 '>
            <Box className='flex items-center gap-2'>
              <Rating
                name='simple-controlled'
                max={10}
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue || 0)
                }}
              />
              <Typography fontSize={'13px'} className='bg-[#bebebe] p-1 text-white rounded-sm px-3  hidden sm:block'>
                Đánh giá của bạn: {rating}
              </Typography>
            </Box>
            <Box className='flex gap-2 items-center ml-1'>
              <Avatar
                sx={{ width: 15, height: 15 }}
                src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'
              />
              <Typography color={'#696969'} component={'span'} fontSize={'10px'} fontWeight={600}>
                145 đánh giá
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider
          sx={{
            background: '#fff'
          }}
        />
        <Box className='flex py-1 gap-1 text-white'>
          {categoryList.map((item, index) => (
            <Box key={item + index} className='flex items-center gap-2 pl-2'>
              <Typography fontSize={'13px'} fontWeight={500}>
                {item}
              </Typography>
              {index < categoryList.length - 1 && (
                <Divider
                  orientation='vertical'
                  sx={{
                    background: '#fff'
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default BoxInformation
