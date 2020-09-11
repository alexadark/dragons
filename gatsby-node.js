const createSitePages = require(`./create/createSitePages`)
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  await createSitePages({ actions, graphql })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  console.log("page-", page.path)
  if (page.path.match(/^\/results/))
    createPage({
      path: "/results",
      matchPath: "/results/*",
      component: path.resolve(`src/pages/results.js`),
    })
}
