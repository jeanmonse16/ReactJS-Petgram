import React, { useEffect, useState } from "react"

import { Category } from "../Category"
import { List, Element} from "./styles"

export const CategoryList = () => {
  const [Categories, setCategories] = useState([])
  useEffect( function (){
    window.fetch("https://petgram-api-jeanpier.now.sh/categories")
      .then(res => res.json())
      .then(response => setCategories(response))
  }, [])
  return (
    <List>
      {
        Categories.map(element => <Element key={element.id}>
            <Category {...element} />
        </Element>)        
      }
    </List>
  )
}
