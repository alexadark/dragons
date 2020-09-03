/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Layout, SEO } from "../../components"

const Page = ({ data }) => {
  const { title, content } = data.wpPage

  return (
    <Layout>
      <SEO title={title} />
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      content
      title
    }
  }
`
