/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen items-center">
      <Header />

      <main className="container flex-auto">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
