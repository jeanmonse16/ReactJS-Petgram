import React from 'react'
import { CategoryList } from '../components/CategoryList'
import { PhotoCardList } from '../container/PhotoCardList'

export const Home = ({id}) => {
  return <>
    <CategoryList />
    <PhotoCardList categoryId={id} />
        </>
}
