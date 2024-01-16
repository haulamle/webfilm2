import { Box, Typography } from '@mui/material'
import React from 'react'

const data =
  '<div><span style="font-size: 1.5em; font-weight: 700;">Niệm Vô Song – A Moment But Forever Full Vietsub</span><br></div><div><span style="font-size: 1.5em; font-weight: 700;"><br></span></div><p><strong>Niệm Vô Song – A Moment But Forever</strong><span>&nbsp;</span>là dự án cổ trang, huyền huyễn được quay dựng dựa trên tiểu thuyết Thiên Hạ Vô Song của tác giả Thập Tứ Lang. Nội dung của phim xoay quanh chuyện tình giữa Thần nữ Vô Song và Hồ tộc Nguyên Trọng. Thần nữ Vô Song nhận phó thác của Tiên giới ẩn giấu thân phận để tiếp cận Nguyên Trọng với mục đích lấy lại thần khí “Tay trái của thần” mà Nguyên Trọng đang nắm giữ.</p><br><p>Thời gian ở cạnh Nguyên Trọng, Vô Song chứng kiến những bất công, cô độc mà Nguyên Trọng phải chịu đựng. Nàng quyết định giúp đỡ Nguyên Trọng, mong chàng được hạnh phúc. Trải qua nhiều khó khăn, trắc trở cùng nhau, tình cảm giữa Vô Song cùng Nguyên Trọng ngày càng sâu đậm. Thế nhưng, đứng trước âm mưu của kẻ xấu, cả hai rơi vào nguy hiểm. Đến cuối cùng, liệu Vô Song và Nguyên Trọng có thể hạnh phúc bên nhau?</p>'

const Information = () => {
  return (
    <Box className='flex flex-col py-4 gap-4'>
      <Typography>Tóm tắt phim</Typography>
      <Box
        className={'w-[85%]'}
        dangerouslySetInnerHTML={{
          __html: data
        }}
      ></Box>
    </Box>
  )
}

export default Information
