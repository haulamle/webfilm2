import { Box } from '@mui/material'
import Menu from '@mui/material/Menu'
import { useNavigate } from 'react-router-dom'
import { PATH } from 'src/routes/path'
import { goToNextPage } from 'src/utils/common'

interface IProp {
  type: 'category' | 'nation'
  anchorEl: null | HTMLElement
  open: boolean
  handleClose: () => void
  subNavbar: string[]
}

const SubNavbar = ({ anchorEl, handleClose, open, subNavbar, type }: IProp) => {
  const navigate = useNavigate()

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button'
      }}
      sx={{ mt: 2 }}
    >
      <Box className={'min-w-[200px] max-w-[490px] flex flex-wrap gap-2 p-2'}>
        {subNavbar.map((item, index) => (
          <Box
            key={index}
            padding={'0.25rem 1.5rem'}
            className={`w-[150px] cursor-pointer hover:bg-[#eeeeee67]`}
            onClick={() => {
              goToNextPage(
                navigate,
                type === 'category' ? `${PATH.search}/?category=${item}` : `${PATH.search}/?nation=${item}`
              )
              handleClose()
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Menu>
  )
}

export default SubNavbar
