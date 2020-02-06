import { useStaticQuery, graphql } from "gatsby"

export const useImages = () => {
  const data = useStaticQuery(graphql`
    query AllImagesQuery {
      allImageSharp {
        edges {
          node {
            id
            original {
              src
            }
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const images = data.allImageSharp.edges.map(({ node }) => node)
  const getImage = name =>
    images.filter(node => node.original.src.includes(name))[0]

  return {
    images,
    getImage,
  }
}
