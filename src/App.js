import React from "react"

import { GlobalStyles } from "./GlobalStyles"
import { Logo } from "./components/Logo"
import { CategoryList } from "./components/CategoryList"
import { PhotoCardList } from "./components/PhotoCardList"

export const App = () => (
<>
  <GlobalStyles />
  <Logo />
  <CategoryList />
  <PhotoCardList />
</>
)