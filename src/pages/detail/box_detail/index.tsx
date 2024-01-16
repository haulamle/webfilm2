import { Box } from '@mui/material'
import { useState } from 'react'
import TabLayout from 'src/layouts/tab_layout'
import { ITabItem } from 'src/types/common'
import Information from './info'
import Performer from './performer'
import Watch from './watch'

const tabList: ITabItem[] = [
  {
    key: 'watch',
    label: 'Xem phim',
    component: <Watch />
  },
  {
    key: 'info',
    label: 'Thông tin',
    component: <Information />
  },
  {
    key: 'performer',
    label: 'Diễn viên',
    component: <Performer />
  }
]

const BoxDetail = () => {
  const [value, setValue] = useState<string>(tabList[0].key)

  const handleChange = (newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box className='flex w-full '>
      <TabLayout value={value} tabList={tabList} handleChange={handleChange} />
    </Box>
  )
}

export default BoxDetail
