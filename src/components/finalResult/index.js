/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import { useQuery, gql } from "@apollo/client"
import config from "../../../config.js"
import { FinalDetectedDragon } from "../index"
import slashes from "remove-trailing-slash"
import { Loading } from "../index"

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

  const dragons = data?.answer?.detectedDragons?.resultsDragons

  return (
    <>
      {error ? (
        <p>Error</p>
      ) : loading ? (
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Loading />
        </Flex>
      ) : data && dragons ? (
        dragons.map(dragon => (
          <FinalDetectedDragon key={dragon.id} dragon={dragon} />
        ))
      ) : (
        <p>You have no dragons detected</p>
      )}
    </>
  )
}
