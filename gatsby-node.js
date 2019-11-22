const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: `/`,
    component: path.resolve(`./src/pages/Homepage/Homepage.js`),
  })
}
