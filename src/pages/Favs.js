import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Tus fotos favoritas' subtitle='Estas son las fotos que te han gustado.'>
    <FavsWithQuery />
  </Layout>
)
