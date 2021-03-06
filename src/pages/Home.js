import React from 'react'
import { CategoryList } from '../components/CategoryList'
import { PhotoCardList } from '../container/PhotoCardList'
import { Helmet } from 'react-helmet'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - la App de hermosas mascotas!</title>
        <meta name='description' content='En Petgram podras encontrar animales muy bonitos ' />
      </Helmet>
      <CategoryList />
      <PhotoCardList categoryId={id} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
