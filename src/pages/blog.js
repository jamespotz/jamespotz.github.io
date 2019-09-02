import React from "react"
import { Link, graphql } from "gatsby"
import { animated, useSpring } from "react-spring"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0)" },
    from: { opacity: 0.1, transform: "translateX(-100%)" },
  })
  return (
    <Layout>
      <SEO title="Articles" />
      <div>
        <Link to="/" className="btn mb-4 self-start">
          back
        </Link>
        <Link to="/all-tags" className="btn mb-4 self-start ml-2 text-gray-600">
          <span className="text-purple-700">#</span> all tags
        </Link>
      </div>
      <animated.div style={props}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.frontmatter.path}
              className="flex flex-col lg:flex-row my-4 lg:items-center"
            >
              <span className="text-sm text-gray-600 font-default order-3 lg:order-1">
                {node.frontmatter.date}
              </span>
              <span className="text-gray-600 h-full ml-3 mr-2 lg:border-l-2 lg:border-purple-800 order-1 lg:order-2">
                &nbsp;
              </span>
              <h1 className="btn-no-uppercase font-bold order-2 lg:order-3">
                {node.frontmatter.title}
              </h1>
            </Link>
          </div>
        ))}
      </animated.div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            tags
          }
          excerpt
        }
      }
    }
  }
`
