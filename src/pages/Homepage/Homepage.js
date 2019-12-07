import React from "react"
// Components
import Page from "src/components/Page/Page"
import Hero from "src/components/Hero/Hero"
import SEO from "src/components/seo"
import Layout from "src/components/Layout/Layout"
import { withStyles } from "@material-ui/core/styles"
import TitleServices from "src/composites/Homepage/TitleServices"
import Portfolio from "../../composites/Homepage/Portfolio"

const styles = {
  products: {
    gridColumn: "1/11",
    padding: "0 0 70px 0",
  },
  portfolio: {
    columnGap: 20,
  },
}

const Homepage = ({
  classes,
  data: {
    contentfulTitle: { title },
  },
}) => {
  return (
    <Page>
      <SEO title="Home" />
      <Layout>
        <Hero title={title} />
      </Layout>
      <Layout>
        <TitleServices />
      </Layout>
      <Layout styles={classes.portfolio}>
        <Portfolio />
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

export default withStyles(styles)(Homepage)
