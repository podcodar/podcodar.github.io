import { useStaticQuery, graphql } from "gatsby"

export const usePosts = () => {
  const data = useStaticQuery(graphql`
    query AllPosts {
      allMdx {
        edges {
          node {
            excerpt(pruneLength: 100)
            frontmatter {
              path
              date
              cover
              title
              episode
              duration
              highlight
              author_name
              author_email
            }
          }
        }
      }
    }
  `)
  const posts = data.allMdx.edges
    .map(({ node }) => ({ ...node.frontmatter, description: node.excerpt }))
    .sort((a, b) => a.date - b.date)

  const highlightedPosts = posts.filter(({ highlight }) => highlight)

  return {
    posts,
    highlightedPosts,
  }
}
