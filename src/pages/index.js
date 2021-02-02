import React from "react";
import Layout from "components/Layout";
import Hero from "../components/Hero";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <Hero {...data.page} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    page: datoCmsHomePage {
      heroImage {
        fluid(maxWidth: 1180) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      heroTagline
      heroSubText
    }
  }
`;
