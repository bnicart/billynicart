import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import moment from 'moment';
import 'moment-precise-range-plugin';

const sinceThen = () => {
  const starts = moment('2012-10-07');
  const now = moment();

  return moment.preciseDiff(starts, now, true);
}

const CounterBox = () => {

  let since = sinceThen();

  return (
    <div
      style={{
        border: `1px solid pink`,
        textAlign: `center`,
        boxShadow: `3px 3px pink`,
        fontWeight: `bold`,
        fontSize: `25px`
      }}
    >
      { `${sinceThen().years} years, ` }
      { `${sinceThen().months} months, ` }
      { `${sinceThen().days} days, ` }
      { `${sinceThen().hours} hours, ` }
      { `${sinceThen().minutes} minutes, ` }
      { `${sinceThen().seconds} seconds` }
    </div>
  )
}

const Kio = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div>
      <Layout location={location} title={siteTitle}>
        <SEO title="Kio" />

        <h1 style={{textAlign: `center`}}>Billy & Yen</h1>
        <CounterBox />
        <h4 style={{textAlign: `center`}}>and counting!!!</h4>
      </Layout>
    </div>
  )
}

export default Kio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
