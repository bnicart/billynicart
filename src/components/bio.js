/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        // display: `flex`,
        marginBottom: rhythm(2.5)
      }}
    >
      <div style={{ display: `inline-block` }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`
          }}
          imgStyle={{borderRadius: `50%`}}
        />
      </div>
      <div style={{ display: `inline-block` }}>
        <div>
          Written by <strong>{author.name}</strong> {author.summary}
        </div>
        <div>
          <span>&nbsp;|&nbsp;</span>
          <a href="/">Blogs</a>
          <span>&nbsp;|&nbsp;</span>
          <a href="/projects">Projects</a>
          <span>&nbsp;|&nbsp;</span>
        </div>
      </div>
    </div>
  )
}

export default Bio

// <a href={`https://twitter.com/${social.twitter}`}>You should follow him on Twitter</a>
