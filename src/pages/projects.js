import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => {
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
          <li className="flex items-center mb-2">
            <a
              href="https://github.com/jamespotz/pomodoro-react"
              alt="Pomodoro Timer"
              className="btn-no-uppercase"
            >
              Pomodoro Timer
            </a>
            <span className="text-lg font-default text-gray-800 ml-2 border-l-2 pl-2 border-purple-800">
              Pomodoro Timer built with React and Electron
            </span>
          </li>
          <li className="flex items-center mb-2">
            <a
              href="https://github.com/jamespotz/rails_svg_tag_helper"
              alt="Rails SVG tag helper"
              className="btn-no-uppercase"
            >
              Rails SVG tag helper
            </a>
            <span className="text-lg font-default text-gray-800 ml-2 border-l-2 pl-2 border-purple-800">
              A simple Rails helper for displaying SVG files.
            </span>
          </li>
          <li className="flex items-center mb-2">
            <a
              href="https://github.com/jamespotz/simple_calendar"
              alt="Simple Ruby Calendar"
              className="btn-no-uppercase"
            >
              Simple Ruby Calendar
            </a>
            <span className="text-lg font-default text-gray-800 ml-2 border-l-2 pl-2 border-purple-800">
              A simple ruby library for creating calenar in Rails views.
            </span>
          </li>
        </animated.ul>
      </div>
    </Layout>
  )
}

export default ProjectsPage
