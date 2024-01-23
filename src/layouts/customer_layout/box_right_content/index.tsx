import { Box, Typography } from '@mui/material'
import Scrollbars from 'react-custom-scrollbars-2'

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import React, { useEffect, useState } from 'react'
import BoxFeaturedMovie from './box_featured_movie'
import { goToNextPage } from 'src/utils/common'
import { PATH } from 'src/routes/path'
import { useNavigate } from 'react-router-dom'
import { categoryList } from 'src/constants/asset'
import { random } from 'lodash'

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
  const navigate = useNavigate()
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
          <Box className={`flex flex-col gap-3`}>
            <Typography fontSize={'16px'} className='text-white'>
              Năm phát hành
            </Typography>
            <Box className={`w-full min-h-[200px] `}>
              <Scrollbars>
                <Box className={`grid grid-cols-3 gap-2 `}>
                  {crateArrayFrom2000To2024()
                    .reverse()
                    .map((item) => (
                      <Box
                        key={item.toString()}
                        className={'w-[70px] bg-[#f8f9f8] grid place-items-center cursor-pointer hover:text-[#0084ff]'}
                        onClick={() => {
                          goToNextPage(navigate, `${PATH.search}/?year=${item}`)
                        }}
                      >
                        <Typography fontSize={'14px'} fontWeight={'500'}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                </Box>
              </Scrollbars>
            </Box>
          </Box>
          <Box className={`flex flex-1 flex-col gap-3 min-h-[400px] `}>
            <Typography fontSize={'16px'} className='text-white'>
              Bảng xếp hạng
            </Typography>
            <Box className={`flex-1`}>
              <Scrollbars>
                <BoxFeaturedMovie />
              </Scrollbars>
            </Box>
          </Box>
        </React.Fragment>
      ),
      detail: (
        <Scrollbars>
          <Box className={`flex flex-1 flex-col gap-3 min-h-[400px] pt-2`}>
            <Typography fontSize={'16px'} className='text-white'>
              Top IMDB
            </Typography>
            <Box className={`flex-1 `}>
              <BoxFeaturedMovie />
            </Box>
          </Box>
          <Box className={`flex flex-col gap-2 mt-4 pr-4 `}>
            <Typography fontSize={'16px'} className='text-white'>
              Thể loại
            </Typography>
            <Box className={`w-full min-h-[200px] `}>
              <Box className={`w-full flex flex-col gap-2 `}>
                {categoryList.reverse().map((item) => (
                  <Box
                    className='flex items-center justify-between gap-2 py-2 border-b border-solid cursor-pointer border-[#eeeeee] pb-1 hover:bg-[#eeeeee67]'
                    key={item.toString()}
                  >
                    <Box className='flex gap-2 items-center'>
                      <CircleOutlinedIcon sx={{ color: '#fff', fontSize: 12 }} />
                      <Typography className='text-white'>{item}</Typography>
                    </Box>
                    <Typography component={'span'} className='ml-auto text-white'>
                      {random(1, 10)}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Scrollbars>
      ),
      'news/': <React.Fragment></React.Fragment>
    }

    return content[key] || content['home']
  }

  return <Box className={`flex pl-4 w-full flex-col gap-2 h-full `}>{renderContent(step)}</Box>
}

export default BoxRightContent
