import React from "react"
import { Link, graphql } from "gatsby"
import { animated, useSpring } from "react-spring"
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0)" },
    from: { opacity: 0.1, transform: "translateX(-100%)" },
  })
  return (
    <Layout>
      <SEO title="Tags" />
      <div>
        <Link to="/" className="btn mb-4 self-start">
          back
        </Link>
        <Link to="/blog" className="btn mb-4 self-start text-gray-600 ml-2">
          articles
        </Link>
      </div>
      <animated.div style={props}>
        <ul>
          {allTags.map(tag => (
            <li key={tag.fieldValue} className="mb-2">
              <Link
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                className="btn-no-uppercase text-gray-600"
              >
                <span className="text-purple-700">#</span>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </animated.div>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
