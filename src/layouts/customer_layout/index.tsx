import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'
import Footer from 'src/components/footer'
import Navbar from 'src/components/navbar'
import BoxRightContent from './box_right_content'

const CustomerLayout = (props: PropsWithChildren) => {
  return (
    <Box className='w-full h-auto bg-[#181616]'>
      <Box className='w-full h-auto flex justify-center bg-[#3a3a3a]  border-b border-solid border-[#cecece]'>
        <Box className='flex flex-1 max-w-[1024px] justify-between px-4'>
          <Navbar />
        </Box>
      </Box>
      <Box className='w-full h-auto flex justify-center'>
        <Box className='flex flex-1 max-w-[1024px] justify-between lg:px-4'>
          <Box className={'w-[100%] px-4 lg:w-[70%] lg:pl-0 lg:pr-4'}>{props.children}</Box>
          <Box className={`border-l border-solid border-[#cecece] hidden lg:block `} />
          <Box className={'w-[30%] hidden lg:block'}>
            <BoxRightContent />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default CustomerLayout
