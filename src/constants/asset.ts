import { PATH } from 'src/routes/path'

export const categoryList = [
  'Cổ Trang',
  'Thần thoại',
  'Võ thuật',
  'Tình Cảm',
  'Viễn Tưởng',
  'Hoạt Hình',
  'Kinh Dị',
  'Phim Hài',
  'Tâm Lý',
  'Hành Động',
  'Hình Sự',
  'Chiến Tranh',
  'Phiêu Lưu',
  'TV Show',
  'Khoa học',
  'Ám nhạc',
  'Gia Đình',
  'Bí Ẩn',
  'Giật gân'
]

export const nationList = [
  'Trung Quốc',
  'Hàn Quốc',
  'Nhật Bản',
  'Mỹ',
  'Thái Lan',
  'Hongkong',
  'Đài Loan',
  'Việt Nam',
  'Ấn Độ',
  'Anh',
  'Pháp',
  'Khác'
]

export const navbarList: { id: string; path: string; subNavbar?: string[] }[] = [
  { id: 'TRANG CHỦ', path: PATH.home },
  {
    id: 'THỂ LOẠI',
    path: ``,
    subNavbar: categoryList
  },
  {
    id: 'QUỐC GIA',
    path: ``,
    subNavbar: nationList
  },
  { id: 'PHIM LẺ', path: `${PATH.search}/?category=PHIM LẺ` },
  { id: 'PHIM MỚI', path: `${PATH.search}/?category=PHIM MỚI` },
  { id: 'PHIM 18+', path: `${PATH.search}/?category=PHIM 18+` }
]
