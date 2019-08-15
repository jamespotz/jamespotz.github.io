import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Progress from "../components/progress"

const SkillsPage = () => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0)" },
    from: { opacity: 0.1, transform: "translateX(-100%)" },
  })
  return (
    <Layout>
      <SEO title="Skills" />
      <div className="flex flex-col">
        <Link to="/" className="btn mb-4 self-start">
          back
        </Link>
        <animated.div style={props} className="w-full md:w-4/12 md:my-10">
          <h2 className="text-xl font-display leading-normal text-gray-900 mb-2">
            Skills
          </h2>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">Ruby</div>
            <Progress value={80} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">
              Javascript
            </div>
            <Progress value={80} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">HTML</div>
            <Progress value={80} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">CSS</div>
            <Progress value={80} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">
              Ruby on Rails
            </div>
            <Progress value={80} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">
              Bootstrap
            </div>
            <Progress value={65} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">ReactJs</div>
            <Progress value={70} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">Redux</div>
            <Progress value={60} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">
              TailwindCSS
            </div>
            <Progress value={70} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">NodeJs</div>
            <Progress value={60} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">
              ExpressJs
            </div>
            <Progress value={60} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">Mocha</div>
            <Progress value={60} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">Rspec</div>
            <Progress value={65} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">MongoDB</div>
            <Progress value={50} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">
              PostgreSQL
            </div>
            <Progress value={50} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">MySQL</div>
            <Progress value={50} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">
              Git/Bitbucket
            </div>
            <Progress value={70} />
          </div>
          <div className="flex mb-3 flex-col md:flex-row md:items-center">
            <div className="w-1/4 font-default pr-2 text-gray-700">
              Agile Methodology
            </div>
            <Progress value={70} />
          </div>
        </animated.div>
      </div>
    </Layout>
  )
}

export default SkillsPage
