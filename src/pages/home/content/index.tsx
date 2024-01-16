import { Box, Typography } from '@mui/material'
import { useIsRequestPending } from 'src/hooks/use_status'
import { IMovie } from 'src/types/movie'
import BoxCard from './box_card'
import { goToNextPage } from 'src/utils/common'
import { PATH } from 'src/routes/path'
import { useNavigate } from 'react-router-dom'

interface IProp {
  data: IMovie[]
}

const Content = ({ data }: IProp) => {
  const navigate = useNavigate()

  const isLoading = useIsRequestPending('movies', 'getMovies')

  const content: { title: string; data: IMovie[]; loading: boolean }[] = [
    {
      title: 'Hành động',
      data: data,
      loading: isLoading
    },
    {
      title: 'Khoa học',
      data: data,
      loading: isLoading
    }
  ]

  return (
    <Box className='w-full  flex-1 flex'>
      {content.map((item) => (
        <Box className='flex-1 flex flex-col gap-4' key={item.title}>
          <Box className='flex justify-between items-center border-l-4 border-solid border-[#de3130] px-2'>
            <Typography className='text-2xl font-bold uppercase'>{item.title}</Typography>
            <Box
              className='bg-[#ff0000] z-10 text-white text-[10px] px-2 py-0.5 font-bold cursor-pointer'
              onClick={() => {
                goToNextPage(navigate, `${PATH.search}?category=${item.title}`)
              }}
            >
              Xem hết
            </Box>
          </Box>
          <Box className='w-full'>
            <BoxCard loading={item.loading} data={data} />
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Content
