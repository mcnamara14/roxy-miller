import React from "react"
// Components
import Layout from "src/components/Layout/Layout"
import Hero from "src/components/Hero/Hero"
import HomepageCarousel from "src/components/HomepageCarousel/HomepageCarousel"
import HeadlineTitleButton from "src/components/HeadlineTitleButton/HeadlineTitleButton"
import SEO from "src/components/seo"
import NewsCtasLayout from "src/components/layouts/NewsCtasLayout"

const Homepage = ({
  data: {
    contentfulTitle: { title },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero title={title} />
      <HomepageCarousel />
      <HeadlineTitleButton />
      <NewsCtasLayout />
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomepageTitle {
    contentfulTitle(contentful_id: { eq: "5AJcGQN4K6Z7Rp3oK3BDwR" }) {
      title
    }
  }
`

export default Homepage
