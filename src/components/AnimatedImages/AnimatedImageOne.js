import React from "react"
import { withStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"
import DashHeadline from "../DashHeadline/DashHeadline"

const styles = ({ breakpoints }) => ({
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
  grid: {
    gridColumn: "2/6",
    [breakpoints.down("xs")]: {
      gridColumn: "1/13",
    },
  },
  effectChico: {
    position: "relative",
    float: "left",
    overflow: "hidden",
    margin: 0,
    background: "#111",
    textAlign: "center",
    cursor: "pointer",
    "&:hover img": {
      opacity: 0.5,
      transform: "scale(1)",
    },
    "&:hover figcaption:before": {
      opacity: 1,
      transform: "scale(1)",
    },
    "&:hover p": {
      opacity: 1,
      transform: "scale(1)",
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
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
      border: "1px solid #fff",
      content: '""',
      transform: "scale(1.1)",
      opacity: 0,
      transition: "opacity 0.35s, transform 0.35s",
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
    padding: "33% 0 10px 0",
    marginBottom: 10,
    fontWeight: "400",
    "& span": {
      fontWeight: "700",
    },
  },
  imageSubTitle: {
    margin: "0 auto",
    maxWidth: 200,
    transform: "scale(1.5)",
    opacity: 0,
    transition: "opacity 0.35s, transform 0.35s",
    fontSize: 10,
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
    <>
      <div className={classes.container}>
        <div className={classes.grid}>
          <figure className={classes.effectChico}>
            <img
              src="https://tympanus.net/Development/HoverEffectIdeas/img/4.jpg"
              alt="img04"
              className={classes.image}
            />
            <figcaption className={classes.caption}>
              <Typography variant="h2" className={classes.imageTitle}>
                Silly <span>Chico</span>
              </Typography>
              <Typography variant="body1" className={classes.imageSubTitle}>
                Chico's main fear was missing the morning bus.
              </Typography>
              <a href="#" className={classes.link}>
                View more
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  )
}

export default withStyles(styles)(AnimatedImageOne)
