import React from "react"
import { withStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"
import Fade from "react-reveal/Fade"

const styles = ({ breakpoints }) => ({
  root: {
    gridColumn: "1/6",
    [breakpoints.down("xs")]: {
      gridColumn: "1/13",
    },
  },
  container: {
    gridTemplateColumns: "repeat(12, 1fr)",
    gridColumn: "1/13",
    display: "grid",
  },
  image: {
    position: "relative",
    display: "block",
    minHeight: "100%",
    maxWidth: "100%",
    opacity: "0.8",
    transition: "opacity 0.35s, transform 0.35s",
    transform: "scale(1.12)",
  },
  effectChico: {
    position: "relative",
    float: "left",
    overflow: "hidden",
    margin: 0,
    background: "#111",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      cursor: "pointer",
    },
    "&:hover img": {
      opacity: 0.5,
      transform: "scale(1)",
      cursor: "pointer",
    },
    "&:hover figcaption:before": {
      opacity: 1,
      transform: "scale(1)",
      cursor: "pointer",
    },
    "&:hover p": {
      opacity: 1,
      transform: "scale(1)",
      cursor: "pointer",
    },
    "&:hover h2": {
      transform: "translate3d(0,-50%,0) translate3d(0,-40px,0)",
      cursor: "pointer",
    },
  },
  caption: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "1.25em",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    "&:before": {
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      content: '""',
      transform: "translate3d(0,50%,0)",
      opacity: 0,
      transition: "opacity 0.35s, transform 0.35s",
      background:
        "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6) 75%)",
    },
    "&:after": {
      pointerEvents: "none",
    },
  },
  link: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1000,
    textIndent: "200%",
    whiteSpace: "nowrap",
    fontSize: 0,
    opacity: 0,
  },
  imageTitle: {
    fontSize: 24,
    padding: "0 0 10px 0",
    marginBottom: 10,
    fontWeight: "400",
    position: "absolute",
    top: "50%",
    left: 0,
    width: "100%",
    color: "#FFF",
    transition: "transform 0.35s, color 0.35s",
    transform: "translate3d(0,-50%,0)",
    "& span": {
      fontWeight: "700",
    },
  },
  imageSubTitle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: "2em",
    width: "calc(100% - 4em)",
    margin: "0 auto",
    transform: "translate3d(0,10px,0)",
    opacity: 0,
    transition: "opacity 0.35s, transform 0.35s",
    fontSize: 12,
    fontTransform: "uppercase",
  },
  dashHeadline: {
    margin: "20px 0",
  },
  title: {
    gridColumn: "2/6",
    [breakpoints.down("xs")]: {
      gridColumn: "1/13",
    },
  },
})

const AnimatedImageOne = ({ classes }) => {
  return (
    <Fade bottom>
      <div className={classes.container}>
        <div className={classes.root}>
          <figure className={classes.effectChico}>
            <img
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="img04"
              className={classes.image}
            />
            <figcaption className={classes.caption}>
              <Typography variant="h2" className={classes.imageTitle}>
                Web <span>Design</span>
              </Typography>
              <Typography variant="body1" className={classes.imageSubTitle}>
                Chico's main fear was missing the morning bus.
              </Typography>
              <a href="/contact" className={classes.link}>
                View more
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </Fade>
  )
}

export default withStyles(styles)(AnimatedImageOne)
