/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useEffect, useContext } from "react"
import { Layout, SEO } from "../../components"
import { Home, Quizz } from "./pageLayouts"
import { GlobalDispatchContext } from "../../context/globalContextProvider"

const Page = ({ data }) => {
  const {
    title,
    slug,
    homeFields: { homeSteps, heroImage, homeTitle, homeSubtitle },
    allDragons: { dragons },
  } = data.wpPage

  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    dispatch({})
  }, [])

  return (
    <Layout>
      <SEO title={title} />
      {slug.includes("home") && <Home img={heroImage} />}
      {slug.includes("quizz") && <Quizz dragons={dragons} />}
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
      ...allDragons
    }
  }
`
