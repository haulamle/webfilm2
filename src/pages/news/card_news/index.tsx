import { Avatar, Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ImageWithFallback } from 'src/components/image_with_fallback'
import { PATH } from 'src/routes/path'
import { INews } from 'src/types/news'
import { goToNextPage } from 'src/utils/common'

interface IProp {
  data: INews
}

const CardNews = ({ data }: IProp) => {
  const navigate = useNavigate()

  return (
    <Box
      className='backdrop-blur-lg rounded-lg border bg-[#eeeeee]  border-white/10 px-2 pb-2 flex flex-col items-center justify-center w-[49%] cursor-pointer'
      onClick={() => {
        goToNextPage(navigate, `${PATH.news}/${data.id}`)
      }}
    >
      <Box className='w-full h-full'>
        <Box className={' py-2 flex gap-2 items-center'}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt='avatar'
            src='https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/avatar-gai-xinh-10-2.jpg'
          />
          <Typography component={'span'}>Tungns</Typography>
        </Box>

        <ImageWithFallback
          style={{ objectFit: 'cover', aspectRatio: '16/9', width: '100%' }}
          src='https://img.asmedia.epimg.net/resizer/0AAWhRs-18LkHLrC1Zp3X1c2y9Y=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/7FLY3ULLSRH2VCC3DDTEQDXMKI.jpg'
          alt={data.title}
        />

        <Box className='whitespace-nowrap overflow-hidden w-full text-start mt-2 text-black font-bold'>
          <Typography className=' text-ellipsis overflow-hidden' title={'Pit Babe The Series (2023)'}>
            {data.title}
          </Typography>
        </Box>
        <Typography fontSize={'13px'} className='text-[#8a8a8a]'>
          12/01/2024
        </Typography>
        <Typography component={'span'} fontSize={'13px'} className='leading-[150%] tracking-wider '>
          {data.content && data.content.length > 150 ? data.content.slice(0, 150) + '...' : data.content}
        </Typography>
      </Box>
    </Box>
  )
}

export default CardNews
