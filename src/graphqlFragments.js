import { graphql } from "gatsby"

export const jsonData = graphql`
  fragment JsonData on ContentfulJsonData {
    data {
      information
    }
  }
`
