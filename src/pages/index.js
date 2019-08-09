import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0)" },
    from: { opacity: 0.1, transform: "translateX(-100%)" },
  })

  return (
    <Layout>
      <SEO title="James Robert Rooke" />
      <animated.div style={props} className="flex flex-col my-auto">
        <Image className="h-20 w-20 rounded-full border border-transparent hover:shadow hover:border-teal-500 transition cursor-pointer" />
        <article
          className="font-default text-gray-700 w-full md:w-4/12 md:my-10"
          alt="James Robert Rooke"
        >
          <p className="text-xl font-normal leading-relaxed tracking-wide mb-4">
            James is a developer skilled with Ruby on Rails, Javascript,
            ReactJs, Databases, CSS, and HTML.
          </p>
          <p className="text-xl font-normal leading-relaxed tracking-wide mb-2">
            James is fueled by his curiosity and his hunger for knowledge. He
            considers himself a{" "}
            <span className="italic">'forever student'</span> eager to learn and
            grow, and stay tuned with the latest technology stack.
          </p>
        </article>
        <ul>
          <li className="mb-2">
            <Link to="/blog/" className="btn">
              article
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/work/" className="btn">
              work
            </Link>
          </li>
          <li className="mb-2">
            <a href="mailto:thepoltergeist23@gmail.com" className="btn">
              get in touch
            </a>
          </li>
        </ul>
      </animated.div>
    </Layout>
  )
}

export default IndexPage
