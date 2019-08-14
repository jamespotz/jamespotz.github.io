import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Emoji } from "../components/emoji"

const WorkPage = () => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0)" },
    from: { opacity: 0.1, transform: "translateX(-100%)" },
  })

  return (
    <Layout>
      <SEO title="Work Experience" />
      <Link to="/" className="btn mb-4 self-start">
        back
      </Link>
      <animated.div style={props} className="flex flex-col">
        <article className="font-default text-gray-700 w-full md:w-4/12 md:my-10">
          <div>
            <h1 className="font-display leading-normal text-xl font-bold">
              Maddington Consulting Inc. (2017 - Present)
            </h1>
            <small className="text-gray-600 leading-normal ">
              <Emoji symbol="👨‍💻" label="man technology" /> Web Developer
            </small>
            <div class="flex my-4">
              <div className="w-4/12 pr-3">
                <h1 className="font-bold font-default leading-normal">
                  <Emoji
                    symbol="🌐"
                    label="globe with meridians"
                    className="mr-2"
                  />
                  E-Signature App (in-house)
                </h1>
              </div>
              <div className="w-8/12">
                <p>
                  An app to sign and send documents and request signature from
                  someone and collect it. Primary role as a Front-end and
                  Backend Developer using
                  <Emoji symbol="⚛" label="atom" className="mx-1" />
                  ReactJs,
                  <Emoji symbol="🕐" label="one o'clock" className="mx-1" />
                  MomentJs, Axios,
                  <Emoji
                    symbol="🍃"
                    label="leaf fluttering in the wind"
                    className="mx-1"
                  />
                  TailwindCSS, Material-UI,
                  <Emoji
                    symbol="◆"
                    label="large blue diamond"
                    className="mx-1"
                  />
                  NodeJs, ExpressJS, MongoDB, PassportJs, JWT,
                  <Emoji symbol="☕" label="hot beverage" className="mx-1" />
                  Mocha and Chai.
                </p>
              </div>
            </div>
            <div class="flex mb-4">
              <div className="w-4/12 pr-3">
                <h1 className="font-bold font-default leading-normal">
                  <Emoji
                    symbol="🌐"
                    label="globe with meridians"
                    className="mr-2"
                  />
                  Seaside Summer Rentals
                </h1>
              </div>
              <div className="w-8/12">
                <p>
                  Mid Cape Cod Vacation Rentals in Dennis and Yarmouth. Primary
                  role as a Front-end Developer using
                  <Emoji symbol="⚛" label="atom" className="mx-1" />
                  ReactJs,
                  <Emoji symbol="🕐" label="one o'clock" className="mx-1" />
                  MomentJs,
                  <Emoji symbol="📦" label="package" className="mx-1" />
                  Webpack
                </p>
              </div>
            </div>
            <div class="flex mb-4">
              <div className="w-4/12 pr-3">
                <h1 className="font-bold font-default leading-normal">
                  <Emoji
                    symbol="🌐"
                    label="globe with meridians"
                    className="mr-2"
                  />
                  Vaycay365
                </h1>
              </div>
              <div className="w-8/12">
                <p>
                  Cape Cod vacation homes with hotel luxuries. Primary role as a
                  Front-end Developer using
                  <Emoji symbol="⚛" label="atom" className="mx-1" />
                  ReactJs,
                  <Emoji symbol="🕐" label="one o'clock" className="mx-1" />
                  MomentJs,
                  <Emoji symbol="📦" label="package" className="mx-1" />
                  Webpack
                </p>
              </div>
            </div>
            <div class="flex mb-4">
              <div className="w-4/12 pr-3">
                <h1 className="font-bold font-default leading-normal">
                  <Emoji
                    symbol="🌐"
                    label="globe with meridians"
                    className="mr-2"
                  />
                  Vaycay365 services
                </h1>
              </div>
              <div className="w-8/12">
                <p>
                  Vaycay365 services page and checkout. Primary role as a
                  Front-end Developer using
                  <Emoji symbol="⚛" label="atom" className="mx-1" />
                  ReactJs,
                  <Emoji symbol="🕐" label="one o'clock" className="mx-1" />
                  MomentJs, Axios, Material-Ui, Bootstrap, Redux, and React
                  Router.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="font-display leading-normal text-xl font-bold">
              Paramount Life & General Insurance Corp. (2014 - 2017)
            </h1>
            <small className="text-gray-600 leading-normal ">
              <Emoji symbol="👨‍💻" label="man technology" /> Software Engineer
            </small>
            <div class="flex my-4">
              <div className="w-4/12 pr-3">
                <h1 className="font-bold font-default leading-normal">
                  <Emoji
                    symbol="🌐"
                    label="globe with meridians"
                    className="mr-2"
                  />
                  ParamountDirect
                </h1>
              </div>
              <div className="w-8/12">
                <p>
                  A direct marketing arm of Paramount Life & General Insurance
                  Corporation. Built with
                  <Emoji symbol="💎" label="gem stone" className="mx-1" /> Ruby
                  on Rails, jQuery,
                  <Emoji symbol="🐘" label="elephant" className="mx-1" />
                  PostgreSQL, Redis, Bootstrap 3,
                  <Emoji symbol="📃" label="page with curl" className="mx-1" />
                  HTML and
                  <Emoji symbol="🛡" label="shield" className="mx-1" />
                  CSS.
                </p>
              </div>
            </div>
            <div class="flex mb-4">
              <div className="w-4/12 pr-3">
                <h1 className="font-bold font-default leading-normal">
                  <Emoji
                    symbol="🌐"
                    label="globe with meridians"
                    className="mr-2"
                  />
                  CTPL
                </h1>
              </div>
              <div className="w-8/12">
                <p>
                  CTPL is a car insurance application page. Built with
                  <Emoji symbol="💎" label="gem stone" className="mx-1" /> Ruby
                  on Rails, jQuery,
                  <Emoji symbol="🐘" label="elephant" className="mx-1" />
                  PostgreSQL, Redis, Bootstrap 3,
                  <Emoji symbol="📃" label="page with curl" className="mx-1" />
                  HTML and
                  <Emoji symbol="🛡" label="shield" className="mx-1" />
                  CSS.
                </p>
              </div>
            </div>
          </div>
        </article>
      </animated.div>
    </Layout>
  )
}

export default WorkPage
