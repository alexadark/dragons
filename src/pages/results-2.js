import React, { useContext } from "react"
import { Layout, SEO } from "../components"
import { GlobalStateContext } from "../context/globalContextProvider"

const Results = () => {
  const state = useContext(GlobalStateContext)
  return (
    <Layout>
      <SEO title="results" />
      <h1>Results</h1>
    </Layout>
  )
}

export default Results
