import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import Treasure from "../components/Treasure/Treasure";

// import { Link } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Treasure />
    </Layout>
  );
};

export default IndexPage;
