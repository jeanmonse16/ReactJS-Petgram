import React, { useContext, Suspense } from 'react'

import { GlobalStyles } from './Styles/GlobalStyles'

import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import { LoggedIn } from './pages/LoggedIn'
import { NotFound } from './pages/NotFound'

import { Context } from './Context'
import { Router, Redirect } from '@reach/router'
import { Loader } from './Styles/Loader'

const Favs = React.lazy(() => import('./pages/Favs'))
const Detail = React.lazy(() => import('./pages/Detail'))
const NotLoggedIn = React.lazy(() => import('./pages/NotLoggedIn'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotLoggedIn path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <LoggedIn path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
