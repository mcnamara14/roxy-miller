import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "src/components/common/Header/Header"
import "./page.css"
import Layout from "../Layout/Layout"

const styles = theme => ({
  page: {
    height: "100%",
    paddingBottom: 200,
    [theme.breakpoints.down("xs")]: {
      padding: "0 20px",
    },
  },
})

const Page = ({ children, classes }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={classes.page}>
      <Layout>
        <Header />
      </Layout>
      {children}
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Page)
