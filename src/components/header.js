import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header>
      <h1 className="">{data.site.siteMetadata.title}</h1>
      <div>By: {data.site.siteMetadata.author}</div>
      <Link
        className={headerStyles.link}
        activeClassName={headerStyles.activeLink}
        to="/"
      >
        home
      </Link>{" "}
      |{" "}
      <Link
        className={headerStyles.link}
        activeClassName={headerStyles.activeLink}
        to="/blog"
      >
        blog
      </Link>{" "}
      |{" "}
      <Link
        className={headerStyles.link}
        activeClassName={headerStyles.activeLink}
        to="/blogs"
      >
        blogs contentful
      </Link>{" "}
      |{" "}
      <Link
        className={headerStyles.link}
        activeClassName={headerStyles.activeLink}
        to="/about"
      >
        about
      </Link>{" "}
      |{" "}
      <Link
        className={headerStyles.link}
        activeClassName={headerStyles.activeLink}
        to="/contact"
      >
        contact
      </Link>
    </header>
  )
}

export default Header
