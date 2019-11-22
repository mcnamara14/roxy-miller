import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/Layout/Layout"
import Image from "src/components/image"
import SEO from "src/components/seo"

const Homepage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/homepage/">Go to page 2</Link>
  </Layout>
)

export default Homepage
