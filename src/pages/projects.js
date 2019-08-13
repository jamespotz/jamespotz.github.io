import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0)" },
    from: { opacity: 0.1, transform: "translateX(-100%)" },
  })
  return (
    <Layout>
      <SEO title="Work Experience" />
      <div className="flex flex-col">
        <Link to="/" className="btn mb-4 self-start">
          back
        </Link>
        <animated.ul style={props}>
          <li className="flex items-center mb-2">
            <a
              href="https://npmjs.com/package/@jamespotz/react-simple-readmore"
              alt="@jamespotz/react-simple-readmore"
              className="btn-no-uppercase"
            >
              @jamespotz/react-simple-readmore
            </a>
            <span className="text-lg font-default text-gray-800 ml-2 border-l-2 pl-2 border-purple-800">
              A simple react readmore using physics for animation.
            </span>
          </li>
          <li className="flex items-center mb-2">
            <a
              href="https://www.npmjs.com/package/@jamespotz/ckeditor5-build-with-base64-adapter"
              alt="@jamespotz/ckeditor5-build-with-base64-adapter"
              className="btn-no-uppercase"
            >
              @jamespotz/ckeditor5-build-with-base64-adapter
            </a>
            <span className="text-lg font-default text-gray-800 ml-2 border-l-2 pl-2 border-purple-800">
              The classic editor build for CKEditor 5 with Base64 adapter for
              converting image's to base64.
            </span>
          </li>
        </animated.ul>
      </div>
    </Layout>
  )
}

export default Projects
