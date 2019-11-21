import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import Region from "../components/Regions/Region";
import SEO from "../components/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Region />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
