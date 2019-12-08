import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import PortfolioItem from "./PortfolioItem"
import Fade from "react-reveal/Fade"
import imageOne from "src/images/homepage-portfolio-design.jpg"
import imageTwo from "src/images/homepage-portfolio-development.jpg"

const styles = ({ breakpoints }) => ({
  title: {
    textAlign: "center",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridColumn: "1/13",
    padding: "60px 0",
  },
  portfolioItems: {
    gridTemplateColumns: "repeat(12, 1fr)",
    gridColumn: "1/13",
    display: "grid",
    columnGap: 100,
    [breakpoints.down("sm")]: {
      columnGap: 0,
    },
  },
  itemOne: {
    gridColumn: "2/7",
    [breakpoints.down("sm")]: {
      gridColumn: "1/13",
    },
  },
  itemTwo: {
    gridColumn: "7/12",
    [breakpoints.down("sm")]: {
      gridColumn: "1/13",
    },
  },
  itemThree: {
    marginTop: -40,
    gridColumn: "2/7",
    [breakpoints.down("sm")]: {
      gridColumn: "1/13",
    },
  },
  itemFour: {
    marginTop: 100,
    gridColumn: "7/12",
    [breakpoints.down("sm")]: {
      gridColumn: "1/13",
    },
  },
})

const Portfolio = ({ classes }) => {
  return (
    <>
      <div className={classes.title}>
        <Fade bottom>
          <Typography variant="h4" align="center">
            <b>Our Work</b>
          </Typography>
        </Fade>
      </div>
      <div className={classes.portfolioItems}>
        <PortfolioItem
          classes={{ root: classes.itemOne }}
          image={imageOne}
          fadeLeft={true}
        />
        <PortfolioItem
          classes={{ root: classes.itemTwo }}
          image={imageTwo}
          fadeRight={true}
        />
        <PortfolioItem
          classes={{ root: classes.itemThree }}
          image={imageTwo}
          fadeLeft={true}
        />
        <PortfolioItem
          classes={{ root: classes.itemFour }}
          image={imageOne}
          fadeRight={true}
        />
      </div>
    </>
  )
}

export default withStyles(styles)(Portfolio)
