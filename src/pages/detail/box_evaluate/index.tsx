import SendIcon from '@mui/icons-material/Send'
import { Box, IconButton, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormInput } from 'src/components/hook_form/form_input'
import { ImageWithFallback } from 'src/components/image_with_fallback'
import CardEvaluate from './card_evaluate'

const BoxEvaluate = () => {
  const { control } = useForm<{
    comment: string
  }>({
    defaultValues: {
      comment: ''
    }
  })

  return (
    <Box className='flex flex-1 flex-col gap-2'>
      <Box className='flex justify-between items-center border-l-4 border-solid border-[#de3130] px-2'>
        <Typography className='font-bold uppercase text-white'>Phản hồi</Typography>
      </Box>
      <Box display={'flex'} flex={1}>
        {/* <Scrollbars> */}
        <Box display={'flex'} flex={1} flexDirection={'column'} gap={2} pr={2}>
          {new Array(3).fill('0').map((item, index) => (
            <CardEvaluate key={item + index} />
          ))}
        </Box>
        {/* </Scrollbars> */}
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
  )
}

export default BoxEvaluate
