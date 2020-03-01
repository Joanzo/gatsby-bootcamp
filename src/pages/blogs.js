import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol>
        {data.allContentfulBlogPost.edges.map(edge => {
          const { title, slug, publishedDate } = edge.node

          return (
            <li key={title}>
              <Link to={`/blogs/${slug}`}>
                <h2>{title}</h2>
                <p>Date: {publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
