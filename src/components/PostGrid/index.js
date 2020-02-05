import React from "react"

import { usePosts } from "hooks/posts"

const PostGrid = () => {
  const { posts } = usePosts()

  return (
    <>
      {posts.map(item => (
        <p key={item.path}>
          <a href={item.path}>{item.title}</a>
        </p>
      ))}
    </>
  )
}

export default PostGrid
