import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../../../components/bio"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import CountryList from './country-list/CountryList';

const ProjectCountryListIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Projects - Country List" />
      <Bio />
      <hr />
      <CountryList />
    </Layout>
  )
}

export default ProjectCountryListIndex
