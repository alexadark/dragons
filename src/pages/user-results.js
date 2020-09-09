import React, { useContext } from "react"
import { Router } from "@reach/router"
import { useQuery } from "@apollo/client"
import { Layout, SEO } from "../components"
import { GlobalStateContext } from "../context/globalContextProvider"
import slugify from "slugify"

const UserResults = () => {
  const state = useContext(GlobalStateContext)
  console.log("slug", slugify("alexaspalato@gmail.com"))

  return (
    <Layout>
      <SEO title="user-results" />
      <h1>Results</h1>
      <Router></Router>
    </Layout>
  )
}

export default UserResults
