import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import CountryList from './country-list/CountryList';

const ProjectCountryListIndex = ({ data, location }) => {

  return (
    <div>
      <SEO title="Projects" />
      <a href="/projects"> Back to Project List</a>
      <CountryList />
    </div>
  )
}

export default ProjectCountryListIndex
