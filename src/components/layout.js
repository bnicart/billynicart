import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          textAlign: `center`,
          color: `#00BEFF`,
          fontFamily: 'fantasy'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `fantasy, sans-serif`,
          marginTop: 0,
          color: `#00BEFF`
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        margin: `${rhythm(3 / 4)} auto`,
        maxWidth: rhythm(33),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        // border: `1px solid #00BEFF`,
        // boxShadow: `3px 3px #00BEFF`,
        backgroundColor: `#FFF`
      }}
      className="card"
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer
        style={{
          textAlign: `center`
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
