import * as React from "react"

import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <div className="main lg:overflow-hidden">
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

export default Layout