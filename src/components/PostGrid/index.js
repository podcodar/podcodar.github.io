import React from "react"
import Grid from "@components/core/Grid"
import PostCard from "@components/PostCard"

import { usePosts } from "hooks/posts"

const PostGrid = () => {
  const { posts } = usePosts()

  return (
    <Grid gap="32px">
      {posts.map(item => (
        <PostCard item={item} />
      ))}
    </Grid>
  )
}

export default PostGrid
