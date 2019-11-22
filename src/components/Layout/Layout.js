import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "src/components/Header/Header"
import "./layout.css"

const styles = {
  page: {
    background: "#f4f4f4",
    padding: "0 50px",
    height: "100vh",
  },
  container: {
    margin: `0 auto`,
    maxWidth: 1200,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 50,
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    gridTemplateColumns: "repeat(12, 1fr)",
    display: "grid",
  },
}

const Layout = ({ children, classes }) => {
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
      <div className={classes.container}>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Layout)
