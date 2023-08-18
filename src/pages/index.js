import * as React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero/Hero"
import Mortage from "../components/mortage/Mortage"
import Service from "../components/service/Service"

const IndexPage = () => (
  <Layout>
    <Hero/>
    <Service/>
    <Mortage/>
  </Layout>
)

export default IndexPage
