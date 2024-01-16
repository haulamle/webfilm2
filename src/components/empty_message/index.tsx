import { Box, Typography } from '@mui/material'

interface IProps {
  title?: string
}

const EmptyMessage = ({ title }: IProps) => {
  return (
    <Box className='text-center p-2'>
      <Typography>{title || '-- Không có dữ liệu --'} </Typography>
    </Box>
  )
}

export default EmptyMessage
