import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/Layout/Layout"
import Hero from "src/components/Hero/Hero"
import HomepageCarousel from "src/components/HomepageCarousel/HomepageCarousel"
import SEO from "src/components/seo"

const Homepage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <HomepageCarousel />
  </Layout>
)

export default Homepage
