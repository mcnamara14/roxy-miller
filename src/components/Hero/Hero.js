import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import HeroTitle from "src/components/HeroTitle/HeroTitle"
import HomepageCarousel from "src/components/HomepageCarousel/HomepageCarousel"

const styles = theme => ({
  root: {
    background: "#29A2FF",
    gridColumn: "1/13",
  },
})

const Hero = ({ classes, title }) => {
  return (
    <>
      <HeroTitle title={title} />
      <HomepageCarousel />
    </>
  )
}

export default withStyles(styles)(Hero)
