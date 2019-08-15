import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Icon from "../components/icon"
import Progress from "../components/progress"
import Avatar from "../components/avatar"

const IndexPage = () => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0)" },
    from: { opacity: 0.1, transform: "translateX(-100%)" },
  })

  return (
    <Layout>
      <SEO title="James Robert Rooke" />
      <animated.div style={props} className="flex flex-col my-auto">
        <Avatar>
          <Image />
        </Avatar>
        <article
          className="font-default text-gray-700 w-full md:w-4/12 md:my-10"
          alt="James Robert Rooke"
        >
          <p className="text-xl font-normal leading-relaxed tracking-wide mb-4">
            James is a Software Developer skilled with Ruby on Rails,
            Javascript, ReactJs, Databases, CSS, and HTML.
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
            <Link to="/skills/" className="btn">
              skills
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/work/" className="btn">
              work
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/projects/" className="btn">
              personal projects
            </Link>
          </li>
          <li className="mb-2">
            <a href="mailto:thepoltergeist23@gmail.com" className="btn">
              get in touch
            </a>
          </li>
          <li>
            <ul className="flex">
              <li className="mr-2">
                <a href="https://dev.to/jamespotz" className="social-link">
                  <Icon name={["fab", "dev"]} />
                </a>
              </li>
              <li className="mr-2">
                <a href="https://github.com/jamespotz" className="social-link">
                  <Icon name={["fab", "github"]} />
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="https://facebook.com/jameslrooke"
                  className="social-link"
                >
                  <Icon name={["fab", "facebook"]} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </animated.div>
    </Layout>
  )
}

export default IndexPage
