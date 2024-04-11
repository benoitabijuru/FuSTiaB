import React from 'react'
import CreatePost from './create-post/page'
import Link from 'next/link'

const AdminPortal = () => {
  return (
    <div>
      <Link href="/admin/create-post">Publish New Article</Link>
    </div>
  )
}

export default AdminPortal