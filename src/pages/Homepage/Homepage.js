import React from "react"
// Components
import Layout from "src/components/Layout/Layout"
import Hero from "src/components/Hero/Hero"
import HomepageCarousel from "src/components/HomepageCarousel/HomepageCarousel"
import CtaHeadlineTitleButton from "src/components/CtaHeadlineTitleButton/CtaHeadlineTitleButton"
import SEO from "src/components/seo"

const Homepage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <HomepageCarousel />
    <CtaHeadlineTitleButton />
  </Layout>
)

export default Homepage
