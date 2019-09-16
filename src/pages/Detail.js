import React from 'react'
import { QueryPhotoCard } from '../container/QueryPhotoCard'
import { Layout } from '../components/Layout'

export const Detail = ({ detailId }) => {
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <QueryPhotoCard id={detailId} />
    </Layout>
  )
}
