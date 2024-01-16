import { Box } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import Navbar from 'src/components/navbar'
import BoxRightContent from './box_right_content'
import Footer from 'src/components/footer'

const CustomerLayout = (props: PropsWithChildren) => {
  return (
    <Box className='w-full h-auto'>
      <Navbar />
      <Box className='w-full h-auto px-[10%] flex flex-row pb-2'>
        <Box className={'w-[70%]'}>{props.children}</Box>
        <Box className={`border-l border-solid border-[#cecece] px-1`} />
        <Box className={'w-[30%]'}>
          <BoxRightContent />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default CustomerLayout
