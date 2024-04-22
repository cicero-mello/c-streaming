import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "C-Streaming",
    siteUrl: "https://www.yourdomain.tld"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-layout",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
        resolve: "gatsby-source-filesystem",
        options: {
            path: "./src/assets/images/media/banner/",
            name: "banner-images"
        },
    },
    {
        resolve: "gatsby-source-filesystem",
        options: {
            path: "./src/assets/images/media/poster/",
            name: "poster-images"
        },
    }
]
}

export default config
