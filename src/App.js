import React from 'react'

import { GlobalStyles } from './Styles/GlobalStyles'
import { Logo } from './components/Logo'
import { CategoryList } from './components/CategoryList'
import { PhotoCardList } from './container/PhotoCardList'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <CategoryList />
    <PhotoCardList categoryId={2} />
  </>
)
