import React from "react"
import Grid from "@components/core/Grid"

import { usePosts } from "hooks/posts"

const PostGrid = () => {
  const { posts } = usePosts()

  return (
    <Grid>
      {posts.map(item => (
        <Grid.Item key={item.path}>
          <a href={item.path}>{item.title}</a>
        </Grid.Item>
      ))}
    </Grid>
  )
}

export default PostGrid
