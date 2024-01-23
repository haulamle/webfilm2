import { Box, Skeleton, Typography } from '@mui/material'
import { useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from 'src/routes/path'
import { IMovie } from 'src/types/movie'
import { goToNextPage } from 'src/utils/common'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import CardMovie from '../card_movie'

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
  const elementRef = useRef<any>(null)
  const [elementWidth, setElementWidth] = useState<number>(0)

  SwiperCore.use([Autoplay, Navigation])

  useLayoutEffect(() => {
    function handleResize() {
      if (elementRef.current) {
        const width = elementRef.current.offsetWidth
        setElementWidth(width)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [elementRef])

  return (
    <Box className='w-full flex flex-col gap-4 border-b border-solid border-[#cecece] pb-4' ref={elementRef}>
      <Box className='flex justify-between border-l-4 items-center border-solid border-[#de3130] pl-2'>
        <Typography fontSize={'18px'} className='font-bold uppercase text-white'>
          {title}
        </Typography>

        {isControl && (
          <Box className='flex items-center gap-2'>
            {!isOutstanding && (
              <Box
                className='bg-[#ff0000] z-10 text-white text-[10px] px-2 py-0.5 font-bold cursor-pointer'
                onClick={() => {
                  goToNextPage(navigate, `${PATH.search}?p=${category}`)
                }}
              >
                Xem hết
              </Box>
            )}
          </Box>
        )}
      </Box>

      {loading ? (
        <Box className={'w-full grid grid-cols-4'}>
          {new Array(4).fill('0').map((item, index) => (
            <Skeleton
              variant='rectangular'
              width={150}
              height={200}
              key={item + index}
              sx={{ background: '#bababa' }}
            />
          ))}
        </Box>
      ) : (
        elementWidth && (
          <Box
            sx={{
              width: `${elementWidth}px`,
              '& .swiper-button-prev,.swiper-button-next': {
                background: '#fff',
                width: 40,
                height: 40,
                borderRadius: 100
              },
              '& .swiper-button-next:after, .swiper-button-prev:after': {
                fontSize: 16,
                fontWeight: 500
              }
            }}
          >
            <Swiper
              slidesPerView={5}
              breakpoints={{
                360: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                420: {
                  slidesPerView: 2.5,
                  spaceBetween: 10
                },
                550: {
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                640: {
                  slidesPerView: 3.5,
                  spaceBetween: 10
                },
                726: {
                  slidesPerView: 4,
                  spaceBetween: 10
                }
              }}
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
              navigation={true}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardMovie isOutstanding={isOutstanding} isShowName={isShowName} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        )
      )}
    </Box>
  )
}

export default SlideMovie
