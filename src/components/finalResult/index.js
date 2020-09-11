/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import { useQuery, gql } from "@apollo/client"
import config from "../../../config.js"
import { FinalDetectedDragon } from "../index"
import slashes from "remove-trailing-slash"

const wpUrl = slashes(config.wordPressUrl)

const GET_RESULT = gql`
  query($id: ID!) {
    answer(id: $id, idType: SLUG) {
      title
      detectedDragons {
        resultsDragons {
          ... on Dragon {
            id
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            dragonFields {
              dragonorigins
              dragonTriggers
              dragonMoviesTitle
              dragonMovies
              dragonsTaming
              dragonReactions
            }
          }
        }
      }
    }
  }
`

export const FinalResult = ({ id }) => {
  const { data, loading, error } = useQuery(GET_RESULT, {
    variables: { id: `${wpUrl}/answers/${id}` },
  })

  console.log("error", data)
  const { resultsDragons } = data.answer.detectedDragons
  console.log("results", resultsDragons)

  return (
    <>
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
      {data && resultsDragons ? (
        resultsDragons.map(dragon => (
          <FinalDetectedDragon key={dragon.id} dragon={dragon} />
        ))
      ) : (
        <p>You have no dragons</p>
      )}
    </>
  )
}
