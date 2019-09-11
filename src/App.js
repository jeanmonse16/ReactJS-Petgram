import React from 'react'

import { GlobalStyles } from './Styles/GlobalStyles'
import { Logo } from './components/Logo'
import { QueryPhotoCard } from './container/QueryPhotoCard'
import { Home } from './pages/Home'
import { Router } from '@reach/router'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyles />
      <Logo />
      {
        detailId ? <QueryPhotoCard id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
            </Router>
      }
    </div>
  )
}
