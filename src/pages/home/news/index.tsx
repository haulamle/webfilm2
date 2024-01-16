import { Box, Skeleton, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { PATH } from 'src/routes/path'
import { INews } from 'src/types/news'
import { goToNextPage } from 'src/utils/common'

interface IProp {
  loading: boolean
  data: INews[]
}

const BoxNews = ({ data, loading }: IProp) => {
  const navigate = useNavigate()

  return (
    <Box className='w-full flex flex-col gap-4'>
      <Box className='flex justify-between items-center border-l-4 border-solid border-[#de3130] px-2'>
        <Typography className='text-2xl font-bold uppercase'>Tin tức</Typography>
        <Box
          className='bg-[#ff0000] z-10 text-white text-[10px] px-2 py-0.5 font-bold cursor-pointer'
          onClick={() => {
            goToNextPage(navigate, PATH.news)
          }}
        >
          Xem hết
        </Box>
      </Box>
      {loading ? (
        <Box className={'w-full flex flex-col gap-4'}>
          {new Array(5).fill('0').map((item, index) => (
            <Box className='flex items-center gap-2' key={item + index}>
              <Skeleton variant='rectangular' width={70} height={70} />
              <Box className='flex flex-col gap-2'>
                <Skeleton variant='text' width={350} sx={{ fontSize: '1rem' }} />
                <Skeleton variant='text' width={350} sx={{ fontSize: '1rem' }} />
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        data.slice(0, 6).map((item) => (
          <Box
            className=' w-full flex justify-start gap-5 border-b-2 border-solid cursor-pointer border-[#eeeeee] pb-1 hover:bg-slate-50'
            key={item.id}
            onClick={() => {
              goToNextPage(navigate, `${PATH.news}/${item.id}`)
            }}
          >
            <Box className='w-[80px] h-[80px] flex flex-col justify-center items-center '>
              <Typography fontSize={'25px'} className='text-[#fd3f43] '>
                {new Date(item.createdAt).getDay()}
              </Typography>
              <Typography fontSize={'13px'} className='text-[#9d9fb1] uppercase'>
                {new Date(item.createdAt).toLocaleString('en-US', { month: 'long' })}
              </Typography>
            </Box>
            <Box className='flex max-w-[85%] flex-col gap-2'>
              <Typography fontSize={'18px'} fontWeight={500}>
                {item.title}
              </Typography>
              <Typography fontSize={'15px'}>
                {item.content && item.content.length > 150 ? item.content.slice(0, 150) + '...' : item.content}
              </Typography>
            </Box>
          </Box>
        ))
      )}
    </Box>
  )
}

export default BoxNews
