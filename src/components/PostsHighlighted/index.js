import React, { useState, useEffect } from "react"
import PostCover from "@components/core/PostCover"

import { usePosts } from "hooks/posts"

const PostGrid = () => {
  const { highlightedPosts } = usePosts()
  const [postIndex, setPostIndex] = useState(0)
  const selectedPost = highlightedPosts[postIndex]

  useEffect(() => {
    const timerId = setInterval(() => {
      const next = postIndex + 1
      setPostIndex(next === highlightedPosts.length ? 0 : next)
    }, 3000)

    return () => {
      clearInterval(timerId)
    }
  })
  return <PostCover {...selectedPost} />
}

export default PostGrid
