import React from "react"
import { Link, graphql } from "gatsby"

import "../../styles/bootstrap.min.css"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { rhythm } from "../../utils/typography"

const ProjectIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects" />
      <Bio />

      <ul className="list-group list-group-flush">
        <li className="list-group-item"><a href="/projects/countries">Country List(with COVID-19 data)</a></li>
      </ul>
    </Layout>
  )
}

export default ProjectIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
