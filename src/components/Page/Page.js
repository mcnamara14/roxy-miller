import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "src/components/Header/Header"
import "./page.css"
import { ThemeProvider } from "@material-ui/styles"
import theme from "src/constants/roxymillerTheme"
import Layout from "../Layout/Layout"

const styles = theme => ({
  page: {
    background: "white",
    height: "100%",
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
      <ThemeProvider theme={theme}>
        <Layout fullWidthBgColor="#29a2ff">
          <Header />
        </Layout>
        {children}
      </ThemeProvider>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Page)
