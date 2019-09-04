import React from "react"

import { GlobalStyles } from "./GlobalStyles"
import { CategoryList } from "./components/CategoryList"
import { PhotoCardList } from "./components/PhotoCardList"

export const App = () => (
<>
  <GlobalStyles />
  <CategoryList />
  <PhotoCardList />
</>
)