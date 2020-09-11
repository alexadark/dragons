/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import { useQuery, gql } from "@apollo/client"
import config from "../../../config.js"
import slashes from "remove-trailing-slash"

const wpUrl = slashes(config.wordPressUrl)

const GET_RESULT = gql`
  query($id: ID!) {
    answer(id: $id, idType: SLUG) {
      title
    }
  }
`

export const FinalResult = ({ id }) => {
  const { data, loading, error } = useQuery(GET_RESULT, {
    variables: { id: `${wpUrl}/answers/${id}` },
  })

  console.log("error", error)

  return (
    <>
      <h1>results for {id}</h1>
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
      {data && <p>{data.answer.title}</p>}
    </>
  )
}
