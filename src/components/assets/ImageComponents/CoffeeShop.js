import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
  image: {
    gridColumn: "1/19",
  },
}

const CoffeeShop = ({ className }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "coffee-shop.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.file.childImageSharp.fluid} className={className} />
      )}
    />
  )
}

export default withStyles(styles)(CoffeeShop)
