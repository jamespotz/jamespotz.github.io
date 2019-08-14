import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1
      className="text-6xl text-gray-700 font-display font-bold leading-normal"
      style={{
        transform: "perspective(600px) skew(-30deg)",
      }}
    >
      404
    </h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/" className="btn mt-2 self-start">
      Return Home
    </Link>
  </Layout>
)

export default NotFoundPage
