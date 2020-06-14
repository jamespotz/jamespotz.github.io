import React from 'react'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Emoji } from '../components/emoji'

const WorkPage = () => {
  const props = useSpring({
    to: { opacity: 1, transform: 'translateX(0)' },
    from: { opacity: 0.1, transform: 'translateX(-100%)' },
  })

  return (
    <Layout>
      <SEO title="Work Experience" />
      <Link to="/" className="btn mb-4 self-start">
        back
      </Link>
      <animated.div style={props} className="flex flex-col">
        <article className="font-default text-gray-700 w-full lg:w-3/4 xl:w-4/12 md:my-10">
          <div>
            <h1 className="font-display leading-normal text-xl font-bold">
              Soko Labs <br />
              (2019 - Present)
            </h1>
            <small className="text-gray-600 leading-normal ">
              <Emoji symbol="👨‍💻" label="man technology" /> NodeJs Developer
            </small>
            <div className="flex flex-col md:flex-row my-4">
              <div className="w-full mt-2 md:mt-0">
                <p>
                  Working on a public Inventory App built with NuxtJs,
                  ExpressJS, NodeJs, MySQL, GraphQL, and PrismaJS. Worked on
                  Shopify, Woocommerce and Shopify Billing Integration. Worked
                  on CI/CD deployment using Gitlab CI/CD and Google App Engine.
                  Worked on the migration from Prisma V1 to Prisma V2. Handles
                  encryption and the decryption of sensitive keys using Google
                  Cloud Key Management Service.
                </p>
                <p className="mt-2">
                  Worked on an external project that pulls raw data from Apparel
                  Magic that can be piped to any Singer IO targets. Used Python3
                  and Google Cloud Compute Engine.
                </p>
                <p className="mt-2">
                  Worked on an external project for creating an invoice for
                  Apparel Magic when Shopify fulfills an order. Used Webhook,
                  Google Cloud Functions, ExpressJS, NodeJs and Axios.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="font-display leading-normal text-xl font-bold">
              Maddington Consulting Inc. <br />
              (2017 - 2019)
            </h1>
            <small className="text-gray-600 leading-normal ">
              <Emoji symbol="👨‍💻" label="man technology" /> Web Developer
            </small>
            <div className="flex flex-col md:flex-row my-4">
              <div className="w-full mt-2 md:mt-0">
                <p>
                  Worked on an In-house Document Signing app using ReactJs,
                  NodeJs, ExpressJS, Axios for ajax request, TailwindCSS,
                  Material-UI, MomentJS, MongoDB, PassportJs, JWT, Mocha, and
                  Char for testing.
                </p>
                <p className="mt-2">
                  Worked on Vacation Rental app's frontend using ReactJS and
                  MomentJS. Worked on separate Vacation Rental app services and
                  checkout page using ReactJS, Webpack, MomentJS, Bootstrap,
                  Axios, Redux, and React Router.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="font-display leading-normal text-xl font-bold">
              Paramount Life & General Insurance Corp. <br />
              (2014 - 2017)
            </h1>
            <small className="text-gray-600 leading-normal ">
              <Emoji symbol="👨‍💻" label="man technology" /> Software Engineer
            </small>
            <div className="flex flex-col md:flex-row my-4">
              <div className="w-full mt-2 md:mt-0">
                <p>
                  Worked on public Ruby on Rails website using Git for the
                  repository, Heroku for hosting, and Amazon S3 for resource
                  repository. Created automated email deliveries service with
                  attached prefilled Compulsory Third Party Liability (CTPL)
                  forms. Worked on implementing a testing framework using Rspec
                  and Capybara.
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
