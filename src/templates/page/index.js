/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Layout, SEO } from "../../components"
import { Home, Quizz } from "./pageLayouts"

const Page = ({ data }) => {
  const {
    title,
    slug,
    homeFields: { homeSteps, heroImage, homeTitle, homeSubtitle },
    quizzFields: { questions },
  } = data.wpPage

  return (
    <Layout>
      <SEO title={title} />
      {slug.includes("home") && <Home img={heroImage} />}
      {slug.includes("quizz") && <Quizz questions={questions} />}
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      title
      slug
      ...homeFields
      ...questions
    }
  }
`
