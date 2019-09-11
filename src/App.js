import React from 'react'

import { GlobalStyles } from './Styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { LoggedIn } from './pages/LoggedIn'
import { NotLoggedIn } from './pages/NotLoggedIn'
import Context from './Context'
import { Router } from '@reach/router'

const Auth = () => (
  <Router>
    <Favs path='/favs' />
    <LoggedIn path='/user' />
  </Router>
)

const NotAuth = () => (
  <Router>
    <NotLoggedIn path='/user' />
    <NotLoggedIn path='/favs' />
      </Router>
)

export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <Router>
      <Home path='/' />
      <Home path='/pet/:id' />
      <Detail path='/detail/:detailId' />
    </Router>
    <Context.Consumer>
      {
        ({ isAuth }) => isAuth ? <Auth /> : <NotAuth />
      }
    </Context.Consumer>
    <NavBar />
  </div>
)
