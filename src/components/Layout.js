import React from "react";
import Nav from "components/Nav/Nav";
import { Helmet } from "react-helmet";
import site from "site.config.json";

export default function Layout({ children, pageTitle }) {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{`${pageTitle} | ${site.title}`}</title>
        <meta name="description" content={site.description} />
      </Helmet>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  );
}
