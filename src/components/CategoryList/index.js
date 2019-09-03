import React from "react"

import { Category } from "../Category"
import { List, Element} from "./styles"

export const CategoryList = () => {
  return (
    <List>
      {
        [1,2,3,4].map(element => <Element key={element}>
            <Category />
        </Element>)        
      }
    </List>
  )
}
