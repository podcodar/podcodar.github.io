import { useStaticQuery, graphql } from "gatsby"

export const usePosts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        edges {
          node {
            frontmatter {
              path
              date
              title
            }
          }
        }
      }
    }
  `)
  const posts = data.allMdx.edges
    .map(({ node }) => node.frontmatter)
    .sort((a, b) => a.date - b.date)

  return {
    posts,
  }
}
