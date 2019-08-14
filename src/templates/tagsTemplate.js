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
        <Link to="/tags" className="btn self-start">
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
                  <Link to={path} className="btn-no-uppercase">
                    {title} ({date})
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
            date(formatString: "MMMM DD, YYYY")
            title
            path
          }
        }
      }
    }
  }
`
