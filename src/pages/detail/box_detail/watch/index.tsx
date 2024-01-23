import { Box, Typography } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { categoryList } from 'src/constants/asset'
import { goToNextPage } from 'src/utils/common'
import { PATH } from 'src/routes/path'
import { useNavigate } from 'react-router-dom'

const Watch = () => {
  const navigate = useNavigate()

  return (
    <Box className='flex flex-col py-4 gap-4'>
      <Typography className='text-white'>Chọn Tập phim :</Typography>
      <Box className='flex flex-wrap gap-4'>
        {Array.from({ length: 12 }, (_, i) => i).map((item) => (
          <Box
            key={item.toString()}
            padding={'6px 10px'}
            fontSize={'12px'}
            fontWeight={600}
            className='bg-[#808080] rounded text-white cursor-pointer hover:bg-[#0084ff]'
          >
            Tập {item + 1}
          </Box>
        ))}
      </Box>
      <Box className='flex items-center text-white'>
        <Typography>Tags</Typography>
        <ArrowRightIcon />
      </Box>
      <Box className='flex flex-wrap gap-4'>
        {categoryList.map((item) => (
          <Box
            key={item}
            padding={'6px 10px'}
            fontSize={'12px'}
            fontWeight={600}
            className='bg-[#808080] rounded text-white cursor-pointer hover:bg-[#0084ff]'
            onClick={() => {
              goToNextPage(navigate, `${PATH.search}/?category=${item}`)
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Watch
