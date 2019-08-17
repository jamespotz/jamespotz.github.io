/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../css/default.css"
import { ThemeConsumer } from "../context/ThemeContext"
import { Emoji } from "./emoji"
import Icon from "./icon"

const getTheme = theme => {
  const klass = theme === "dark" ? "night" : "bg-white"

  return `flex min-h-screen flex-col w-full ${klass} antialiased p-2 md:p-4 lg:p-6`
}

const Layout = ({ children }) => {
  const _data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeConsumer>
      {state => (
        <>
          <div className={getTheme(state.theme)}>
            <button
              className="absolute top-0 right-0 text-gray-500 m-2"
              onClick={state.changeTheme}
              title="Toggle from light to dark"
            >
              <Icon name="adjust" className="text-xl" />
            </button>
            <main className="flex flex-col flex-grow ">{children}</main>
            <footer className="mt-auto text-gray-500 font-default leading-normal tracking-wide">
              © {new Date().getFullYear()}, Built with
              <Emoji symbol="❤" label="heart" className="text-red-500 mx-1" />,
              and{" "}
              <a href="https://www.gatsbyjs.org" className="btn-no-uppercase">
                Gatsby
              </a>
            </footer>
          </div>
        </>
      )}
    </ThemeConsumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
