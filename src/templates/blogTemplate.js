import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useSpring, animated } from "react-spring"

const Template = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0)" },
    from: { opacity: 0.1, transform: "translateX(-100%)" },
  })
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <article className="flex flex-col w-full md:w-5/12">
        <Link to="/blog" className="btn self-start">
          Back
        </Link>
        <animated.div style={props} className="mb-10">
          <h1 className="font-display text-4xl text-gray-900 leading-normal font-bold mt-6">
            {frontmatter.title}
          </h1>
          <h2 className="font-default text-xs text-gray-500 tracking-wider leading-normal font-normal mb-6">
            {frontmatter.date}
          </h2>
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </animated.div>
      </article>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
