import React from "react"

import { usePosts } from "hooks/posts"

const PostGrid = () => {
  const { highlightedPosts } = usePosts()

  return (
    <>
      {highlightedPosts.map(item => (
        <a href={item.path}>
          <h2>{item.title}</h2>
          <h5>{item.description}</h5>
        </a>
      ))}
    </>
  )
}

export default PostGrid
