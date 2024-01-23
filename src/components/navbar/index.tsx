import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Collapse, Drawer, IconButton, Typography } from '@mui/material'
import _, { isEmpty } from 'lodash'
import { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { useNavigate } from 'react-router-dom'
import { navbarList } from 'src/constants/asset'
import { PATH } from 'src/routes/path'
import { goToNextPage } from 'src/utils/common'
import logo from '../../assets/logo.jpg'
import { ImageWithFallback } from '../image_with_fallback'
import BoxSearch from './box_search'
import SubNavbar from './sub_navbar'

const Navbar = () => {
  const navigate = useNavigate()

  const [search, setSearch] = useState<string>('')
  const [smallMenu, setSmallMenu] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<{
    category: boolean
    nation: boolean
  }>({ category: false, nation: false })

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

  const handleExpandClick = (type: 'category' | 'nation') => {
    setExpanded((prevExpanded) => ({ ...prevExpanded, [type]: !prevExpanded[type] }))
  }

  const handleClose = () => {
    setAnchorEl({
      id: '',
      category: null,
      nation: null,
      subNavbar: []
    })
  }

  const toggleDrawer = (open: boolean) => {
    setSmallMenu(open)
  }

  return (
    <Box className='flex flex-1 justify-between items-center py-2 '>
      <Box className='block lg:hidden'>
        <IconButton
          onClick={() => {
            toggleDrawer(true)
          }}
        >
          <MenuIcon sx={{ color: 'white' }} />
        </IconButton>
        <Drawer
          anchor={'left'}
          open={smallMenu}
          onClose={() => {
            toggleDrawer(false)
          }}
        >
          <Box className='w-[280px] md:w-[380px] h-full items-center '>
            {navbarList.map((item) => (
              <Box
                key={item.id}
                className='hover:cursor-pointer'
                padding={'5px '}
                onClick={() => {
                  if (!item.subNavbar) {
                    goToNextPage(navigate, item.path)
                    toggleDrawer(false)
                  } else {
                    handleExpandClick(item.id === 'THỂ LOẠI' ? 'category' : 'nation')
                  }
                }}
              >
                <Box
                  className='flex justify-between items-center border-b border-solid border-[#eeeeee]'
                  padding={'10px'}
                >
                  <Typography className={`text-black hover:text-[#0084ff]`}>{item.id}</Typography>
                  {item.subNavbar && !_.isEmpty(item.subNavbar) && <KeyboardArrowDownIcon className={`text-black`} />}
                </Box>
                <Collapse
                  in={item.id === 'THỂ LOẠI' ? expanded.category : expanded.nation}
                  timeout='auto'
                  unmountOnExit
                  sx={{ mt: 1 }}
                >
                  {item.subNavbar &&
                    !_.isEmpty(item.subNavbar) &&
                    item.subNavbar.map((e, i) => (
                      <Typography
                        key={e + i}
                        padding={'5px 0 5px 15px'}
                        onClick={() => {
                          toggleDrawer(false)

                          goToNextPage(
                            navigate,
                            item.id === 'THỂ LOẠI' ? `${PATH.search}/?category=${e}` : `${PATH.search}/?p=${e}`
                          )
                        }}
                      >
                        - Phim {e}
                      </Typography>
                    ))}
                </Collapse>
              </Box>
            ))}
          </Box>
        </Drawer>
      </Box>

      <Box
        className='flex h-full items-center space-x-4 cursor-pointer '
        onClick={() => {
          goToNextPage(navigate, PATH.home)
        }}
      >
        <ImageWithFallback src={logo} alt='Logo' className='h-[60px] object-contain max-w-[150px]' />
      </Box>

      <Box className='hidden lg:flex h-full items-center space-x-4 '>
        {navbarList.map((item) => (
          <Box
            key={item.id}
            className='flex items-center space-x-1 hover:cursor-pointer'
            onClick={(e: any) => {
              if (item.subNavbar && !_.isEmpty(item.subNavbar)) {
                handleClickSetAnchorEl(item.id === 'THỂ LOẠI' ? 'category' : 'nation', e, item.subNavbar)
              }

              if (!item.subNavbar) {
                goToNextPage(navigate, item.path)
              }
            }}
          >
            <Typography className={`text-white hover:text-[#0084ff]`}>{item.id}</Typography>
            {item.subNavbar && !_.isEmpty(item.subNavbar) && <KeyboardArrowDownIcon className={`text-white`} />}
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
        className={` flex items-center relative justify-between bg-gray-100 rounded-full px-3 py-1.5 border-solid border-2 border-indigo-600`}
      >
        <input
          type='text'
          placeholder='Tìm kiếm phim'
          className='bg-transparent w-[120px] xl:w-[200px] outline-none flex-grow mr-2'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          style={{
            fontSize: '14px'
          }}
        />
        <SearchIcon className={`text-gray-600SSS`} fontSize='small' />

        {!isEmpty(search) && (
          <Box className='min-w-[350px] flex min-h-[500px] max-h-[500px] absolute bg-white top-[120%] right-0 rounded pl-4 py-4 shadow-md z-20'>
            <Box flex={1}>
              <Scrollbars>
                <BoxSearch search={search} setSearch={setSearch} />
              </Scrollbars>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Navbar
