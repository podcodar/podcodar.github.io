module.exports = {
  siteMetadata: {
    title: `PodCodar - Seu canal com a programação `,
    description: `Comece seus primeiros passos na computação com a gente! Aqui você pode interagir, pode se atualizar quanto as novas tendencias, pode pedir ajuda, pode reclamar e ainda PodCodar :)`,
    author: `@PodCodar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PodCodar`,
        short_name: `PodCodar`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/post-mark.png`, // This path is relative to the root of the site.
      },
    },
    // handle mdx import
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-remark-reading-time",
    // module resolver
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src", // <- will be used as a root dir
        aliases: {
          "@components": "./components",
          helpers: "./helpers",
          hooks: "./hooks",
          images: "./images",
          pages: "./pages",
          templates: "./templates",
        },
      },
    },
    // import svg
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    // styled-components
    "gatsby-plugin-styled-components",
    // offline mode
    `gatsby-plugin-offline`,
  ],
}
