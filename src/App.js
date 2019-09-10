import React from 'react'

import { GlobalStyles } from './Styles/GlobalStyles'
import { Logo } from './components/Logo'
import { CategoryList } from './components/CategoryList'
import { PhotoCardList } from './container/PhotoCardList'
import { QueryPhotoCard } from './container/QueryPhotoCard'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyles />
      <Logo />
      {
        detailId ? <QueryPhotoCard id={detailId} />
          : <>
            <CategoryList />
            <PhotoCardList categoryId={1} />
            </>
      }
    </div>
  )
}
