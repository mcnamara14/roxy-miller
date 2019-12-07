import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import Fade from "react-reveal/Fade"

const styles = {
  products: {
    gridColumn: "1/10",
    padding: "0 0 50px 0",
  },
  services: {
    gridTemplateColumns: "repeat(12, 1fr)",
    gridColumn: "1/13",
    display: "grid",
  },
  service: {
    paddingBottom: 5,
  },
  leftCol: {
    gridColumn: "7/10",
    justifySelf: "end",
  },
  rightCol: {
    gridColumn: "11/13",
    justifySelf: "end",
  },
}

const TitleServices = ({ classes }) => {
  return (
    <>
      <div className={classes.products}>
        <Fade bottom>
          <Typography variant="h4">
            We create world-class digital products, communications, and brands.
          </Typography>
        </Fade>
      </div>
      <div className={classes.services}>
        <Fade left cascade>
          <div className={classes.leftCol}>
            <Typography variant="h6" className={classes.service}>
              Strategy
            </Typography>
            <Typography variant="h6" className={classes.service}>
              Brand Identity
            </Typography>
            <Typography variant="h6" className={classes.service}>
              UI/UX Design.
            </Typography>
            <Typography variant="h6" className={classes.service}>
              Development
            </Typography>
          </div>
        </Fade>
        <Fade right cascade>
          <div className={classes.rightCol}>
            <Typography variant="h6" className={classes.service}>
              Mobile Apps
            </Typography>
            <Typography variant="h6" className={classes.service}>
              Websites
            </Typography>
            <Typography variant="h6" className={classes.service}>
              Enterprise Software
            </Typography>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default withStyles(styles)(TitleServices)
