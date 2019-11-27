import React from "react"
import { withStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"

const styles = {
  container: {
    gridTemplateColumns: "repeat(12, 1fr)",
    gridColumn: "1/13",
    display: "grid",
    columnGap: 80,
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
    gridColumn: "1/5",
  },
  effectChico: {
    position: "relative",
    float: "left",
    overflow: "hidden",
    margin: 0,
    background: "#3085a3",
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
  title: {
    fontSize: 24,
    padding: "27% 0 0 0",
    marginBottom: 10,
  },
  subTitle: {
    margin: "0 auto",
    maxWidth: 200,
    transform: "scale(1.5)",
    opacity: 0,
    transition: "opacity 0.35s, transform 0.35s",
    fontSize: 10,
    fontTransform: "uppercase",
  },
}

const NewsCTA = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <figure className={classes.effectChico}>
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/4.jpg"
            alt="img04"
            className={classes.image}
          />
          <figcaption className={classes.caption}>
            <Typography variant="h2" className={classes.title}>
              Silly <span>Chicoad</span>
            </Typography>
            <Typography variant="body1" className={classes.subTitle}>
              Chico's main fear was missing the morning bus.
            </Typography>
            <a href="#" className={classes.link}>
              View more
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default withStyles(styles)(NewsCTA)
