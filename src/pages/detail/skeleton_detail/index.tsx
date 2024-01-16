import { Box, Divider, Skeleton } from '@mui/material'

const SkeletonDetail = () => {
  return (
    <Box className='flex flex-col gap-2 pr-2 py-2'>
      <Box className='flex  gap-3'>
        <Skeleton variant='rounded' width={160} height={260} />
        <Box className='flex-1 flex flex-col gap-2 '>
          <Skeleton variant='text' width={'70%'} />
          <Skeleton variant='text' width={'40%'} />
          <Skeleton variant='text' width={'30%'} />
          <Skeleton variant='rounded' width={'70%'} height={40} />
          <Skeleton variant='text' width={'70%'} height={30} />
        </Box>
      </Box>
      <Divider />
      <Skeleton variant='rounded' className='w-full aspect-video min-h-[500px]' />
      <Divider />
      <Skeleton variant='rounded' width={'100%'} height={120} />
      <Divider />
      <Skeleton variant='rounded' width={'100%'} height={200} />
    </Box>
  )
}

export default SkeletonDetail
