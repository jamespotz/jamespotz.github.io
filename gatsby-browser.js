/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// Prismjs
import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/command-line/prism-command-line.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faAdjust,
  faExternalLinkAlt,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons"

library.add(fab, faAdjust, faExternalLinkAlt, faSun, faMoon)
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
