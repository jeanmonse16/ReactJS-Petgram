import React from 'react'
import { QueryPhotoCard } from '../container/QueryPhotoCard'
import { Layout } from '../components/Layout'

export default ({ detailId }) => {
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <QueryPhotoCard id={detailId} />
    </Layout>
  )
}
