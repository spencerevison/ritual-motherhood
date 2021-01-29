const path = require("path");

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
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./", // <- will be used as a root dir
        aliases: {
          components: "./src/components",
          svg: "./static/images/svg",
        },
      },
    },
    "gatsby-plugin-eslint",
  ],
};
