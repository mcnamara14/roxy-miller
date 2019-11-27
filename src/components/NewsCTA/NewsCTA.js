import React from "react"
import { withStyles } from "@material-ui/styles"

const styles = {
  container: {
    gridTemplateColumns: "repeat(12, 1fr)",
    gridColumn: "1/13",
    display: "grid",
    columnGap: 80,
  },
  image: {
    gridColumn: "1/5",
    width: "100%",
  },
}

const NewsCTA = ({ classes }) => {
  return (
    <div className={classes.container}>
      <img
        src="https://basicagency.com/imager/uploads/case-studies/17709/01_Hero_Edited_4fd950619b6fc4dddc68576d9a1d3850.jpg"
        className={classes.image}
      />
    </div>
  )
}

export default withStyles(styles)(NewsCTA)
