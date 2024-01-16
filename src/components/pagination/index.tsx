import { Box, Pagination, SxProps } from '@mui/material'
import React from 'react'

interface IProp {
  total?: number
  page: number
  totalPage: number
  disabled?: boolean
  loading?: boolean
  sx?: SxProps
  handleChangePage: (e: React.ChangeEvent<unknown>, page: number) => void
}

const PaginationCPN = ({ page = 1, totalPage, handleChangePage, disabled, total, sx, loading = false }: IProp) => {
  return (
    <React.Fragment>
      {!loading && (
        <Box sx={sx}>
          <Pagination
            onChange={handleChangePage}
            color='primary'
            page={page}
            count={totalPage}
            disabled={totalPage === 1 || total === 0 || disabled}
            siblingCount={1}
          />
        </Box>
      )}
    </React.Fragment>
  )
}

export default PaginationCPN
