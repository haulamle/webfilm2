import React from 'react'

import CustomerLayout from 'src/layouts/customer_layout'
import { IRoute } from 'src/types/route'
import { PATH } from './path'

const Home = React.lazy(() => import('src/pages/home'))
const NewsDetail = React.lazy(() => import('src/pages/news_detail'))
const News = React.lazy(() => import('src/pages/news'))
const Search = React.lazy(() => import('src/pages/search'))
const Detail = React.lazy(() => import('src/pages/detail'))
const NotFound = React.lazy(() => import('src/components/not_found'))
// const NotFound = React.lazy(() => import('src/components/not_found'));

export const RouteList: IRoute[] = [
  {
    path: PATH.home,
    name: 'Trang chủ',
    component: Home,
    layout: CustomerLayout
  },
  {
    path: PATH.detail,
    name: 'Chi tiết',
    component: Detail,
    layout: CustomerLayout
  },
  {
    path: PATH.search,
    name: 'Tìm kiếm phim',
    component: Search,
    layout: CustomerLayout
  },
  {
    path: PATH.news,
    name: 'Tin tức',
    component: News,
    layout: CustomerLayout
  },
  {
    path: PATH.newsDetail,
    name: 'Tin tức chi tiết',
    component: NewsDetail,
    layout: CustomerLayout
  },
  {
    path: PATH.notFound,
    name: 'Không tìm thấy trang',
    component: NotFound
  }
]
