import React from "react"
// Components
import Page from "src/components/Page/Page"
import Hero from "src/components/Hero/Hero"
import HeadlineTitleButton from "src/components/HeadlineTitleButton/HeadlineTitleButton"
import SEO from "src/components/seo"
import NewsCtasLayout from "src/components/layouts/NewsCtasLayout"
import Layout from "../../components/Layout/Layout"

const Homepage = ({
  data: {
    contentfulTitle: { title },
  },
}) => {
  return (
    <Page>
      <SEO title="Home" />
      <Layout fullWidthBgColor="#29a2ff">
        <Hero title={title} />
      </Layout>
      <Layout>
        <HeadlineTitleButton />
        <NewsCtasLayout />
      </Layout>
    </Page>
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
