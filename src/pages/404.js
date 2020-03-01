import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <h1>Not Found Page</h1>
      <Link to="/">Head to Home</Link>
    </Layout>
  )
}

export default NotFound
