import React, { Fragment, useEffect, useState } from "react"

import { Category } from "../Category"
import { List, Element} from "./styles"

export const CategoryList = () => {

  const [Categories, setCategories] = useState([])
  const [ShowFixed, setShowFixed] = useState(false)

  useEffect( function (){
    window.fetch("https://petgram-api-jeanpier.now.sh/categories")
      .then(res => res.json())
      .then(response => setCategories(response))
  }, [])

  useEffect( function(){
    const OnScroll = e => {
      const newShowFixed = window.scrollY > 200
      ShowFixed != newShowFixed && setShowFixed(newShowFixed) 
    }
      document.addEventListener("scroll", OnScroll)

      return () => document.removeEventListener("scroll", OnScroll)
    }, [ShowFixed]
  )

  const RenderList = (fixed) => (
    <List className={fixed ? "fixed" : ""}>
    {
      Categories.map(element => <Element key={element.id}>
          <Category {...element} />
      </Element>)        
    }
  </List>
  )
  
  return (
    <Fragment>
      {RenderList()}
      { ShowFixed && RenderList(true)}
    </Fragment>
  )
}
