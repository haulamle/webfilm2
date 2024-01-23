import { Box, IconButton, Typography } from '@mui/material'
import { FormInput } from 'src/components/hook_form/form_input'
import { ImageWithFallback } from 'src/components/image_with_fallback'
import { momentLocale } from 'src/utils/common'
import SendIcon from '@mui/icons-material/Send'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const CardEvaluate = () => {
  const [reply, setReply] = useState<boolean>(false)

  const { control } = useForm<{
    comment: string
  }>({
    defaultValues: {
      comment: ''
    }
  })

  const handleChange = () => {
    setReply((prev) => !prev)
  }

  return (
    <Box className='w-full flex justify-between gap-3'>
      <ImageWithFallback
        className='w-[50px] h-[50px] rounded object-cover'
        src={
          'https://taytou.com/wp-content/uploads/2022/05/Anh-chibi-avatar-chang-trai-ao-xanh-in-hinh-qua-tao-cute.jpg'
        }
        alt='avatar'
      />

      <Box className='flex flex-col gap-2 w-full'>
        <Box className='bg-[#f5f5f7] rounded ' padding={'5px 15px'} flex={1}>
          <Box className='w-full h-[60px] flex justify-between items-center pb-1 ' borderBottom={'1px solid #dedede'}>
            <Box>
              <Typography fontWeight={600} fontSize={'13px'}>
                Admin
              </Typography>
              <Box p='5px 0'>
                <Typography>Phim hay quá</Typography>
              </Box>
            </Box>
          </Box>
          <Box className='flex gap-3'>
            <Typography fontSize={'13px'} className='text-[#898c95] hover:text-[#0084ff] cursor-pointer'>
              Thích
            </Typography>
            <Typography
              fontSize={'13px'}
              className='text-[#898c95] hover:text-[#0084ff] cursor-pointer'
              onClick={handleChange}
            >
              Phản hồi
            </Typography>
            <Typography fontSize={'13px'} color={'#898c95'}>
              {momentLocale('2024-01-16T10:04:01.409Z')}
            </Typography>
          </Box>
        </Box>

        {reply && (
          <Box className='flex flex-col gap-2 w-full'>
            <Box className='w-full flex justify-between gap-3'>
              <ImageWithFallback
                className='w-[50px] h-[50px] rounded object-cover'
                src={
                  'https://taytou.com/wp-content/uploads/2022/05/Anh-chibi-avatar-chang-trai-ao-xanh-in-hinh-qua-tao-cute.jpg'
                }
                alt='avatar'
              />

              <Box className='flex flex-col gap-2 w-full'>
                <Box className='bg-[#f5f5f7] rounded ' padding={'5px 15px'} flex={1}>
                  <Box
                    className='w-full h-[60px] flex justify-between items-center pb-1 '
                    borderBottom={'1px solid #dedede'}
                  >
                    <Box>
                      <Typography fontWeight={600} fontSize={'13px'}>
                        Admin
                      </Typography>
                      <Box p='5px 0'>
                        <Typography>Phim hay quá</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box className='flex gap-3'>
                    <Typography fontSize={'13px'} className='text-[#898c95] hover:text-[#0084ff] cursor-pointer'>
                      Thích
                    </Typography>
                    <Typography fontSize={'13px'} className='text-[#898c95] hover:text-[#0084ff] cursor-pointer'>
                      Phản hồi
                    </Typography>
                    <Typography fontSize={'13px'} color={'#898c95'}>
                      {momentLocale('2024-01-16T10:04:01.409Z')}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className='flex gap-3 py-2 items-center'>
              <ImageWithFallback
                className='w-[50px] h-[50px] rounded object-cover'
                src={
                  'https://taytou.com/wp-content/uploads/2022/05/Anh-chibi-avatar-chang-trai-ao-xanh-in-hinh-qua-tao-cute.jpg'
                }
                alt='avatar'
              />
              <FormInput control={control} name='comment' />
              <IconButton>
                <SendIcon color='info' />
              </IconButton>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default CardEvaluate
