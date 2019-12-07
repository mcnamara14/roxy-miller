import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import Fade from "react-reveal/Fade"

const styles = ({ breakpoints, palette }) => ({
  root: {},
  image: {
    width: "100%",
  },
  title: {
    marginTop: 30,
  },
  subTitle: {
    color: palette.lightGray,
    fontWeight: 300,
    marginTop: 5,
  },
})

const PortfolioItem = ({ classes, image, fadeLeft, fadeRight }) => {
  return (
    <>
      <div className={classes.root}>
        <Fade left={fadeLeft} right={fadeRight}>
          <img src={image} alt="img04" className={classes.image} />
        </Fade>
        <Fade bottom cascade>
          <Typography variant="h5" className={classes.title}>
            <b>Web Design</b>
          </Typography>
          <Typography variant="h5" className={classes.subTitle}>
            Conception, Mocks, Ideas
          </Typography>
        </Fade>
      </div>
    </>
  )
}

export default withStyles(styles)(PortfolioItem)
