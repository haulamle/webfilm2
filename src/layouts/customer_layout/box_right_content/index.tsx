import { Box, Typography } from '@mui/material'
import Scrollbars from 'react-custom-scrollbars-2'

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import BoxFeaturedMovie from './box_featured_movie'
import React, { useEffect, useState } from 'react'

type TStep = 'home' | 'detail' | 'news/'

export const crateArrayFrom2000To2024 = () => {
  const start = 2000
  const end = new Date().getFullYear()
  const result = []

  for (let index = start; index <= end; index++) {
    result.push(index)
  }

  return result
}

const BoxRightContent = () => {
  const location = window.location.href

  const [step, setStep] = useState<TStep>('home')

  useEffect(() => {
    if (location.search('detail') !== -1) {
      setStep('detail')
    } else if (location.search('news/') !== -1) {
      setStep('news/')
    } else {
      setStep('home')
    }
  }, [location])

  const renderContent = (key: TStep) => {
    const content: { [key in TStep]: JSX.Element } = {
      home: (
        <React.Fragment>
          <Box className={`flex flex-col gap-3 `}>
            <Typography fontSize={'16px'}>Năm phát hành</Typography>
            <Box className={`w-full min-h-[200px] `}>
              <Scrollbars>
                <Box className={`w-full flex flex-wrap gap-2 h-[200px] justify-around pr-4`}>
                  {crateArrayFrom2000To2024()
                    .reverse()
                    .map((item) => (
                      <Box
                        key={item.toString()}
                        className={
                          'w-[94px] h-[30px] bg-[#f8f9f8] grid place-items-center cursor-pointer hover:text-[#0084ff]'
                        }
                      >
                        <Typography fontWeight={'500'}>{item}</Typography>
                      </Box>
                    ))}
                </Box>
              </Scrollbars>
            </Box>
          </Box>
          <Box className={`flex flex-1 flex-col gap-3 min-h-[400px]`}>
            <Typography fontSize={'16px'}>Bảng xếp hạng</Typography>
            <Box className={`flex-1`}>
              <Scrollbars>
                <BoxFeaturedMovie />
              </Scrollbars>
            </Box>
          </Box>
        </React.Fragment>
      ),
      detail: (
        <React.Fragment>
          <Scrollbars>
            <Box className={`flex flex-1 flex-col gap-3 min-h-[400px] pr-4`}>
              <Typography fontSize={'16px'}>Top IMDB</Typography>
              <Box className={`flex-1 `}>
                <BoxFeaturedMovie />
              </Box>
            </Box>
            <Box className={`flex flex-col gap-3 mt-2 pr-4`}>
              <Typography fontSize={'16px'}>Thể loại</Typography>
              <Box className={`w-full min-h-[200px] `}>
                <Box className={`w-full flex flex-col gap-2 `}>
                  {crateArrayFrom2000To2024()
                    .reverse()
                    .map((item) => (
                      <Box
                        className='flex items-center justify-between gap-2 py-2 border-b-2 border-solid cursor-pointer border-[#eeeeee] pb-1 hover:bg-slate-50'
                        key={item.toString()}
                      >
                        <Box className='flex gap-2 items-center'>
                          <CircleOutlinedIcon fontSize='small' />
                          <Typography className='text-gray-700'>Action & Adventure</Typography>
                        </Box>
                        <Typography component={'span'} className='ml-auto text-gray-600'>
                          472
                        </Typography>
                      </Box>
                    ))}
                </Box>
              </Box>
            </Box>
          </Scrollbars>
        </React.Fragment>
      ),
      'news/': <React.Fragment></React.Fragment>
    }

    return content[key] || content['home']
  }

  return <Box className={`flex p-2 w-full flex-col gap-2 h-full`}>{renderContent(step)}</Box>
}

export default BoxRightContent
