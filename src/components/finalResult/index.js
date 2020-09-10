/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import { useQuery, gql } from "@apollo/client"
import config from "../../../config.js"
import slashes from "remove-trailing-slash"

const wpUrl = slashes(config.wordPressUrl)

// const GET_RESULT = gql`
//   query($id: String!) {
//     answer(id: $id, idType: SLUG) {
//       title
//     }
//   }
// `

export const FinalResult = () => {
  // const { data, loading, error } = useQuery(GET_RESULT, {
  //   variables: { id: `${wpUrl}/answers/${slugId}` },
  // })
  // if (loading) {
  //   return <p>Loading</p>
  // }
  // if (error) {
  //   return <p>Error</p>
  // }
  // return <div>{data && <p>{data.answer.title}</p>}</div>
  return <h1>final result</h1>
}
