import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";

const OfferingsPage = ({ data: { page } }) => {
  return (
    <Layout pageTitle={page.title}>
      <div>{global.title}</div>
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
    </Layout>
  );
};

export default OfferingsPage;

export const query = graphql`
  query OfferingsQuery {
    page: datoCmsStandardPage(slug: { eq: "offerings" }, title: {}) {
      title
      body
    }
  }
`;
