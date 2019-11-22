const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: `/homepage`,
    component: path.resolve(`./src/pages/Homepage/Homepage.js`),
  })
}
