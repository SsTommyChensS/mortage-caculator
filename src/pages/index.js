import * as React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero/Hero"
import Mortgage from "../components/mortgage/Mortgage"
import Service from "../components/service/Service"

const IndexPage = () => (
  <Layout>
    <Hero/>
    <Service/>
    <Mortgage/>
  </Layout>
)

export default IndexPage
