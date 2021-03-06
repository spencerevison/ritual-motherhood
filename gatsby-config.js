module.exports = {
  siteMetadata: {
    title: "Ritual Motherhood",
    siteUrl: "https://www.ritualmotherhood.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "caf21b109029e563d2c467bfe34c35",
      },
    },
    "gatsby-plugin-linaria",
    /*{
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-xxxxxxx-xx",
      },
    },
    "gatsby-plugin-sitemap",*/
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-alias-imports",
      options: {
        aliases: {
          components: "src/components",
          pages: "src/pages",
          svg: "static/images/svg",
          "site.config.json": "src/site.config.json",
        },
      },
    },
    "gatsby-plugin-eslint",
  ],
};
