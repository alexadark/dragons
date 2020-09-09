const createSitePages = require(`./create/createSitePages`)
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  await createSitePages({ actions, graphql })
}

// exports.onCreatePage = async ({page, actions}) => {
//   const {createPage} = actions
// }
