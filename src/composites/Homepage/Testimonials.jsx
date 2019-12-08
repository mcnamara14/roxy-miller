import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import Fade from "react-reveal/Fade"
import TrackVisibility from "react-on-screen"
import Counter from "src/composites/Homepage/Counter"

const styles = {
  testimonialContainer: {
    gridColumn: "1/8",
    marginTop: 140,
    display: "grid",
  },
  testimonial: {
    fontWeight: 300,
  },
  link: {
    gridColumn: "1/8",
    color: "black",
    textDecoration: "none",
    marginTop: 100,
    width: "fit-content",
    height: "fit-content",
  },
  linkText: {
    width: "fit-content",
    borderBottom: "1px dotted black",
    marginTop: -60,
  },
  counter: {
    gridColumn: "11/13",
    gridRow: "1",
    alignSelf: "center",
    marginTop: 150,
  },
}

const Testimonials = ({ classes }) => {
  return (
    <>
      <div className={classes.testimonialContainer}>
        <Fade left>
          <Typography variant="h4" className={classes.testimonial}>
            "As a full-service UX design agency, we work closely with our
            clients to define, design, and develop transformative user
            experiences across all platforms and brand’s touch points."
          </Typography>
          <a href="#" className={classes.link}>
            <Typography variant="h6" className={classes.linkText}>
              Read Reviews
            </Typography>
          </a>
        </Fade>
      </div>
      <div className={classes.counter}>
        <Fade right>
          <TrackVisibility>
            <Counter />
          </TrackVisibility>
        </Fade>
      </div>
    </>
  )
}

export default withStyles(styles)(Testimonials)
