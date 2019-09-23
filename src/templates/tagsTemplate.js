import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { useSpring, animated } from "react-spring"

const TagsTemplate = ({
  pageContext,
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { tag } = pageContext
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0)" },
    from: { opacity: 0.1, transform: "translateX(-100%)" },
  })

  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      <article className="flex flex-col w-full md:w-5/12">
        <Link to="/all-tags" className="btn self-start">
          Back
        </Link>
        <animated.div style={props} className="mb-10">
          <h1 className="font-display text-2xl text-gray-600 leading-normal font-bold my-6">
            <span className="text-3xl text-purple-600">#</span>
            {tag}
          </h1>
          <ul>
            {edges.map(({ node }) => {
              const { title, path, date } = node.frontmatter
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className="flex flex-col lg:flex-row my-4 lg:items-center"
                  >
                    <span className="text-sm text-gray-600 font-default order-3 lg:order-1">
                      {date}
                    </span>
                    <span className="text-gray-600 h-full ml-3 mr-2 lg:border-l-2 lg:border-purple-800 order-1 lg:order-2">
                      &nbsp;
                    </span>
                    <h1 className="btn-no-uppercase font-bold order-2 lg:order-3">
                      {title}
                    </h1>
                  </Link>
                </li>
              )
            })}
          </ul>
        </animated.div>
      </article>
    </Layout>
  )
}

export default TagsTemplate

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMM, YYYY")
            title
            path
          }
        }
      }
    }
  }
`
