import React, { useContext } from 'react'

import { GlobalStyles } from './Styles/GlobalStyles'

import { Logo } from './components/Logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { LoggedIn } from './pages/LoggedIn'
import { NotLoggedIn } from './pages/NotLoggedIn'
import { NotFound } from './pages/NotFound'

import { Context } from './Context'
import { Router, Redirect } from '@reach/router'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <div>
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
    </div>
  )
}
