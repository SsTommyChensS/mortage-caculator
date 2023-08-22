import * as React from "react"

import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import ScrollToTop from "./buttons/ScrollToTop"
import ScrollIndicator from "./scroll/scrollIndicator"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <div className="main lg:overflow-hidden">
        <main>{children}</main>
      </div>
      <Footer/>
      <ScrollToTop/>
      <ScrollIndicator/>
    </>
  )
}

export default Layout