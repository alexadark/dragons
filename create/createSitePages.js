const path = require(`path`)
const pageTemplate = path.resolve(`./src/templates/page/index.js`)

module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
      query GET_PAGES {
        allWpPage(sort: { order: DESC, fields: date }) {
          nodes {
            uri

          }
        }
      }
      `

  const { createPage } = actions

  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpPage.nodes

  pages.map(({ uri }) => {
    createPage({
      path: uri,
      component: pageTemplate,
      context: {
        uri,
      },
    })
  })
}
