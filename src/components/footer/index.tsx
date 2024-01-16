import { Box, Typography } from '@mui/material'
import logo from '../../assets/logo.jpg'
import React from 'react'
import { ImageWithFallback } from '../image_with_fallback'
import { goToNextPage } from 'src/utils/common'
import { PATH } from 'src/routes/path'
import { useNavigate } from 'react-router-dom'

const menuList: { title: string; category: string[] }[] = [
  {
    title: 'Phim mới',
    category: ['Thần thoại', 'Viễn Tưởng', 'Hoạt Hình', 'Kinh Dị', 'Khoa học']
  },
  {
    title: 'Quốc gia',
    category: ['Trung Quốc', 'Hàn Quốc', 'Nhật Bản', 'Mỹ', 'Thái Lan']
  },
  {
    title: 'Thông tin',
    category: ['Liên hệ', 'Về chúng tôi', 'Bản quyền', 'Điều khoản sử dụng', 'Chính sách bảo mật']
  }
]

const Footer = () => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Box className='w-full text-black justify-center flex flex-col items-center' border={'1px solid #eeeeee'}>
        <Box width={'80%'} display={'flex'} padding={'40px 0px'} justifyContent={'space-between'}>
          <Box flex={0.3}>
            <Box borderLeft={'4px solid #de3130'}>
              <ImageWithFallback src={logo} alt='logo' className='ml-[15px] object-cover  w-[50px]' />
            </Box>
            <Box sx={{ marginTop: '15px', marginLeft: '20px' }}>
              <Typography fontSize={'13px'}>
                <Typography component={'span'} color={'#0084ff'}>
                  Motphim
                </Typography>
                - Trang xem phim trực tuyến miễn phí tại Vietnam. Tại đây các bạn có thể tìm kiếm những bộ phim mà mình
                yêu thích với hơn hàng nghìn bộ phim mới được cập nhật thường xuyên.
              </Typography>
            </Box>
          </Box>

          {menuList.map((item, index) => (
            <Box key={item.title + index}>
              <Box borderLeft={'4px solid #de3130'}>
                <Typography ml={1}>{item.title}</Typography>
              </Box>
              <Box className='gap-3 flex flex-col mt-4'>
                {item.category.map((e) => (
                  <Typography
                    fontSize='14px'
                    key={e}
                    className='cursor-pointer hover:text-[#0084ff]'
                    onClick={() => {
                      goToNextPage(
                        navigate,
                        item.title !== 'Phim mới' ? `${PATH.search}/?nation=${e}` : `${PATH.search}/?category=${e}`
                      )
                    }}
                  >
                    {item.title !== 'Thông tin' && 'Phim'} {e}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Box className='w-full bg-gray-200 py-3 h-50 grid place-items-center text-sm'>
          Bản quyền © 2023 | Thực hiện bởi Haudev
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Footer
