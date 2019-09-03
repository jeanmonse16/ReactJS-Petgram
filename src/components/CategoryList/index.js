import React from "react"

import { Category } from "../Category"
import { List, Element} from "./styles"
import { categories } from "../../../api/db.json"

export const CategoryList = () => {
  return (
    <List>
      {
        categories.map(element => <Element key={element.id}>
            <Category {...element} />
        </Element>)        
      }
    </List>
  )
}
