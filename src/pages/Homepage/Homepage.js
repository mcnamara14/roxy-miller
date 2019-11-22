import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/Layout/Layout"
import Image from "src/components/image"
import SEO from "src/components/seo"

const Homepage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Homepage</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default Homepage
