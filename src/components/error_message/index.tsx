import { Box, Typography } from '@mui/material'

interface IErrorMessageProps {
  marginTop?: number
  textAlign?: 'center' | 'left' | 'right'
  onClick?: () => void
  title?: string
}

function ErrorMessage(props: IErrorMessageProps) {
  const { marginTop = 2, textAlign = 'center', title = 'Đã có lỗi xảy ra, vui lòng thử lại' } = props

  return (
    <Box className={`mt-${marginTop} text-${textAlign}`}>
      <Typography className='text-base mb-1.5'>{title}</Typography>
      <button onClick={props.onClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Thử lại
      </button>
    </Box>
  )
}

export default ErrorMessage
