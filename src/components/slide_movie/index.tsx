import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Box, Skeleton, Typography } from '@mui/material'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from 'src/routes/path'
import { IMovie } from 'src/types/movie'
import { goToNextPage } from 'src/utils/common'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import CardMovie from '../card_movie'

// const sliderSettings = {
//   440: {
//     slidesPerView: 2,
//     spaceBetween: 30
//   },
//   680: {
//     slidesPerView: ,
//     spaceBetween: 30
//   },
//   1024: {
//     slidesPerView: 5,
//     spaceBetween: 30
//   }
// }

interface IProp {
  title: string
  category: string
  data: IMovie[]
  loading: boolean
  isOutstanding?: boolean
  isAutoPlay?: boolean
  isShowName?: boolean
  isControl?: boolean
}

const SlideMovie = ({
  title = '',
  data = [],
  loading = false,
  isOutstanding = false,
  category,
  isAutoPlay,
  isShowName,
  isControl = true
}: IProp) => {
  const navigate = useNavigate()
  const swiperRef = useRef<any>()

  SwiperCore.use([Autoplay])

  const goNext = () => {
    swiperRef.current?.slideNext()
  }

  const goPrev = () => {
    swiperRef.current?.slidePrev()
  }

  return (
    <Box className='w-full flex flex-col gap-6 border-b border-solid border-[#cecece] py-4'>
      <Box className='flex justify-between border-l-4 items-center border-solid border-[#de3130] px-2'>
        <Typography className='font-bold uppercase'>{title}</Typography>

        {isControl && (
          <Box className='flex items-center gap-2'>
            {!isOutstanding && (
              <Box
                className='bg-[#ff0000] z-10 text-white text-[10px] px-2 py-0.5 font-bold cursor-pointer'
                onClick={() => {
                  goToNextPage(navigate, `${PATH.search}?category=${category}`)
                }}
              >
                Xem hết
              </Box>
            )}

            <Box className='flex'>
              <ArrowLeftIcon className='cursor-pointer hover:text-[#0084ff]' onClick={goPrev} />
              <ArrowRightIcon className='cursor-pointer hover:text-[#0084ff]' onClick={goNext} />
            </Box>
          </Box>
        )}
      </Box>
      {loading ? (
        <Box className={'w-full flex flex-wrap justify-between'}>
          {new Array(5).fill('0').map((item, index) => (
            <Skeleton variant='rectangular' width={150} height={200} key={item + index} />
          ))}
        </Box>
      ) : (
        <Box className={'w-full'}>
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            autoplay={
              isAutoPlay
                ? {
                    delay: 1500
                  }
                : false
            }
            // navigation={true}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <CardMovie isOutstanding={isOutstanding} isShowName={isShowName} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
    </Box>
  )
}

export default SlideMovie
