import { Box, Typography } from '@mui/material'
import './style.css'
import { useNavigate } from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

interface IProp {
  isOutstanding?: boolean
  isShowName?: boolean
}

const CardMovie = ({ isOutstanding = false, isShowName = true }: IProp) => {
  const navigate = useNavigate()
  return (
    <Box
      className='w-[160px] backdrop-blur-lg  border border-white/10 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden'
      sx={{
        '&:hover .iconButtonPlay': {
          transform: 'translate(-50%, -50%) scale(1.8)',
          opacity: 1
        }
      }}
      onClick={() => {
        navigate('/detail/tet-o-lang-dia-nguc')
      }}
    >
      {isOutstanding && (
        <Box className='absolute uppercase top-1.5 left-1.5 bg-[#ff0000] z-10 text-white text-[12px] px-2 font-bold'>
          Nổi bật
        </Box>
      )}

      <Box className='w-full h-full'>
        <Box
          className='relative bg-cover bg-center h-[220px] w-full border border-white/25 overflow-hidden'
          style={{
            backgroundImage:
              "url('https://imageio.forbes.com/specials-images/imageserve/63bb1581b82b5d6f35c4756b/Official-IMAX-poster-for--Avatar--The-Way-of-Water-/960x0.jpg?height=889&width=711&fit=bounds')"
          }}
        >
          <Box className='absolute uppercase bottom-0 bg-[#408bea] text-white text-[12px] px-2 font-bold'>
            Full 20/20 vietsup
          </Box>
          <Box className='iconButtonPlay absolute grid place-items-center bg-black/50 text-blue-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 opacity-0 transition-transform duration-300'>
            <PlayArrowIcon />
          </Box>
        </Box>
        {isShowName && (
          <Box className='whitespace-nowrap overflow-hidden w-full text-start mt-1 text-white'>
            <Typography className=' text-ellipsis overflow-hidden' title={'Pit Babe The Series (2023)'}>
              Pit Babe The Series (2023)
            </Typography>
            <Typography component={'span'} fontSize={'13px'} className='leading-[150%] tracking-wider uppercase'>
              2022
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default CardMovie
