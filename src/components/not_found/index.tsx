import { Box, Button, Typography } from '@mui/material'
import not_found from '../../assets/not_found.png'
import { useNavigate } from 'react-router-dom'
import { PATH } from 'src/routes/path'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { ImageWithFallback } from '../image_with_fallback'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Box className={`w-[100%] h-[100vh] grid place-items-center`}>
      <Box className={'flex flex-col items-center space-y-5'}>
        <ImageWithFallback src={not_found} alt='not_found' className='w-[500px]' />
        <Typography className={'text-[30px]'}>Không tìm thấy trang !!!</Typography>
        <Button
          variant='contained'
          startIcon={<KeyboardReturnIcon />}
          onClick={() => {
            navigate(PATH.home)
          }}
        >
          Quay lại
        </Button>
      </Box>
    </Box>
  )
}

export default NotFound
