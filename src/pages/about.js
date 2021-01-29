import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";

const AboutPage = ({ data: { about } }) => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: about.body }} />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    about: datoCmsStandardPage(slug: { eq: "about" }, title: {}) {
      title
      body
    }
  }
`;
