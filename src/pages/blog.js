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
        <Link to="/tags" className="btn mb-4 self-start ml-2 text-gray-500">
          <span className="text-purple-700">#</span> all tags
        </Link>
      </div>
      <animated.div style={props}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.frontmatter.path} className="flex my-4 items-center">
              <span className="text-sm text-gray-500 font-default">
                {node.frontmatter.date}
              </span>
              <span className="text-gray-600 ml-3 mr-2 border-l-2 border-purple-800">
                &nbsp;
              </span>
              <h1 className="btn-no-uppercase">{node.frontmatter.title} </h1>
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
