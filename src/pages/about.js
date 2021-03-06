import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";

const AboutPage = ({ data: { page } }) => {
  return (
    <Layout pageTitle={page.title}>
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    page: datoCmsStandardPage(slug: { eq: "about" }, title: {}) {
      title
      body
    }
  }
`;
