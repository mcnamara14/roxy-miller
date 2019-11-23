import React, { useState } from "react"
// Components
import Layout from "src/components/Layout/Layout"
import SEO from "src/components/seo"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import FormHelperText from "@material-ui/core/FormHelperText"
import Button from "@material-ui/core/Button"
import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
  container: {
    margin: "100px 0",
    gridColumn: "1/13",
  },
  button: {
    gridColumn: "1/4",
  },
}

const Contact = ({ classes }) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")

  const onSubmit = () => {
    const userId = Math.round(Date.now() + Math.random())

    window.analytics.identify(userId, {
      name,
      email,
      phone,
      company,
    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <FormControl className={classes.container}>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input onChange={event => setName(event.target.value)} on />
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input onChange={event => setEmail(event.target.value)} on />
        <InputLabel htmlFor="my-input">Phone number</InputLabel>
        <Input onChange={event => setPhone(event.target.value)} on />
        <InputLabel htmlFor="my-input">Company</InputLabel>
        <Input onChange={event => setCompany(event.target.value)} on />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <Button onClick={onSubmit} variant="container" className={classes.button}>
        Submit
      </Button>
    </Layout>
  )
}

export default withStyles(styles)(Contact)
