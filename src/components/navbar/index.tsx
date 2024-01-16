import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Typography } from '@mui/material'
import _ from 'lodash'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { navbarList } from 'src/constants/asset'
import { PATH } from 'src/routes/path'
import logo from '../../assets/logo.jpg'
import { ImageWithFallback } from '../image_with_fallback'
import SubNavbar from './sub_navbar'
import { goToNextPage } from 'src/utils/common'

const Navbar = () => {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<{
    id: string
    category: null | HTMLElement
    nation: null | HTMLElement
    subNavbar: string[]
  }>({
    id: '',
    category: null,
    nation: null,
    subNavbar: []
  })

  const handleClickSetAnchorEl = (
    type: 'category' | 'nation',
    event: React.MouseEvent<HTMLElement>,
    subNavbar: string[]
  ) => {
    let { category, nation } = anchorEl

    if (type === 'nation') {
      nation = event.currentTarget
      category = null
    } else {
      category = event.currentTarget
      nation = null
    }

    setAnchorEl({ id: type, category, nation, subNavbar })
  }

  const handleClose = () => {
    setAnchorEl({
      id: '',
      category: null,
      nation: null,
      subNavbar: []
    })
  }

  return (
    <Box className='w-full flex items-center justify-between bg-white h-[70px] px-[10%] border-b border-solid border-[#cecece]'>
      <Box
        className='flex h-full items-center space-x-4 cursor-pointer '
        onClick={() => {
          goToNextPage(navigate, PATH.home)
        }}
      >
        <ImageWithFallback src={logo} alt='Logo' className='h-full object-contain' />
      </Box>

      <Box className='flex h-full items-center space-x-5 '>
        {navbarList.map((item) => (
          <Box
            key={item.id}
            className='flex items-center space-x-2 hover:cursor-pointer'
            onClick={(e: any) => {
              if (item.subNavbar && !_.isEmpty(item.subNavbar)) {
                handleClickSetAnchorEl(item.id === 'THỂ LOẠI' ? 'category' : 'nation', e, item.subNavbar)
              }

              if (!item.subNavbar) {
                goToNextPage(navigate, item.path)
              }
            }}
          >
            <Typography className={`text-gray-600 hover:text-[#0084ff]`}>{item.id}</Typography>
            {item.subNavbar && !_.isEmpty(item.subNavbar) && <KeyboardArrowDownIcon className={`text-gray-600`} />}
          </Box>
        ))}
        {!_.isEmpty(anchorEl.subNavbar) && (
          <SubNavbar
            type={anchorEl.id === 'category' ? 'category' : 'nation'}
            anchorEl={anchorEl.id === 'category' ? anchorEl.category : anchorEl.nation}
            handleClose={handleClose}
            open={Boolean(anchorEl.id === 'category' ? anchorEl.category : anchorEl.nation)}
            subNavbar={anchorEl.subNavbar}
          />
        )}
      </Box>

      <Box
        className={`flex items-center justify-between bg-gray-100 rounded-full px-4 py-2 border-solid border-2 border-indigo-600`}
      >
        <input type='text' placeholder='Tìm kiếm phim' className='bg-transparent outline-none flex-grow mr-2' />
        <SearchIcon className={`text-gray-600 text-1xl`} />
      </Box>
    </Box>
  )
}

export default Navbar
