import React, { useEffect, useState } from 'react'

import { Category } from '../Category'
import { List, Element } from './styles'
import { Loader } from '../../Styles/Loader'

function useCategoriesData () {
  const [Categories, setCategories] = useState([])
  const [Loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-api-jeanpier.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { Categories, Loading }
}

const CategoryListComponent = () => {
  const { Categories, Loading } = useCategoriesData()
  const [ShowFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const OnScroll = e => {
      const newShowFixed = window.scrollY > 200
      ShowFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', OnScroll)

    return () => document.removeEventListener('scroll', OnScroll)
  }, [ShowFixed]
  )

  const RenderList = (fixed) => (
    <List fixed={fixed}>
      {
        Categories.map(element => <Element key={element.id}> <Category {...element} path={`/pet/${element.id}`} /> </Element>
        )
      }
    </List>
  )

  if (Loading) {
    return <Loader />
  }

  return (
    <>
      {RenderList()}
      {ShowFixed && RenderList(true)}
    </>
  )
}

export const CategoryList = React.memo(CategoryListComponent)
