import React from 'react'
import { Route, Routes as Router } from 'react-router-dom'

import { Box } from '@mui/material'
import { RouteList } from './route_list'

const Routes = () => {
  return (
    <Router>
      {RouteList.map((route) => {
        const Layout = route.layout ? route.layout : React.Fragment
        const Page = route.component as any

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Layout>
                <React.Suspense fallback={<Box className='flex-1'>{/* <Loading /> */}</Box>}>
                  <Page />
                </React.Suspense>
              </Layout>
            }
          />
        )
      })}
    </Router>
  )
}

export default Routes
