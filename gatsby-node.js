const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: `/`,
    component: path.resolve(`./src/pages/Homepage/Homepage.js`),
  })

  createPage({
    path: `/contact/`,
    component: path.resolve(`./src/pages/Contact/Contact.js`),
  })

  createPage({
    path: `/page-2/`,
    component: path.resolve(`./src/pages/SecondPage/SecondPage.js`),
  })
}
