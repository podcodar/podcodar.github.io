import React from "react"

import { usePosts } from "../../hooks/posts"

const PostGrid = () => {
  const { posts } = usePosts()
  debugger

  return (
    <>
      {posts.map(item => (
        <p>
          <a href={item.path}>{item.title}</a>
        </p>
      ))}
    </>
  )
}

export default PostGrid
