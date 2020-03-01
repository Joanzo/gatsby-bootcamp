import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const BlogContentFul = props => {
  const {
    title,
    publishedDate,
    body: { json },
  } = props.data.contentfulBlogPost

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const { title, file } = node.data.target.fields
        const alt = title["en-US"]
        const url = file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(json, options)}
    </Layout>
  )
}

export default BlogContentFul
