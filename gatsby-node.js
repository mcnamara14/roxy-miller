const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: `/`,
    component: path.resolve(`./src/pages/Homepage/Homepage.js`),
  })

  createPage({
    path: `/page-2/`,
    component: path.resolve(`./src/pages/SecondPage/SecondPage.js`),
  })
}
