import React from "react"
import coffeeShop from "src/images/coffee-shop.jpg"
import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
  image: {
    width: "100%",
    gridColumn: "1/13",
    margin: "100px 0",
    zIndex: 1,
  },
}

const HomepageCarousel = ({ classes }) => {
  return <img src={coffeeShop} className={classes.image} />
}

export default withStyles(styles)(HomepageCarousel)
