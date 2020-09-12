/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React from "react"

export const FinalDetectedDragon = ({ dragon }) => {
  console.log("dragon", dragon)
  const {
    title,
    featuredImage: {
      node: { sourceUrl },
    },
    dragonFields: {
      dragonorigins,
      dragonTriggers,
      dragonMoviesTitle,
      dragonMovies,
      dragonsTaming,
      dragonReactions,
    },
  } = dragon

  return (
    <div sx={{ my: [40, 65], "&:last-of-type": { mb: 0 } }}>
      <Container sx={{ maxWidth: "l" }}>
        <h1 sx={{ textAlign: "center", fontSize: [40, 72] }}>{title}</h1>
        <Flex sx={{ justifyContent: "center" }}>
          <img src={sourceUrl} alt={`image for ${title}`} />
        </Flex>
      </Container>
      <Flex sx={{ flexWrap: ["wrap", "wrap", "nowrap"] }}>
        <div
          sx={{
            bg: "lightGrey",
            width: ["100%", "100%", "70%"],
            py: 35,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: 650,

              ">div": {
                width: ["100%", "50%"],
              },
            }}
          >
            <div>
              <h3>Origins</h3>
              <div dangerouslySetInnerHTML={{ __html: dragonorigins }} />
            </div>
            <div>
              <h3>Triggers</h3>
              <div dangerouslySetInnerHTML={{ __html: dragonTriggers }} />
            </div>
            <div>
              <h3>Reactions</h3>
              <div dangerouslySetInnerHTML={{ __html: dragonReactions }} />
            </div>
            <div>
              <h3>Movies({dragonMoviesTitle})</h3>
              <div dangerouslySetInnerHTML={{ __html: dragonMovies }} />
            </div>
          </Container>
        </div>
        <div
          sx={{
            bg: "grey",
            color: "#fff",
            p: 35,
            maxWidth: ["100%", "100%", 450],
          }}
        >
          <h2 sx={{ color: "orange" }}>How to Tame the {title}</h2>
          <div dangerouslySetInnerHTML={{ __html: dragonsTaming }} />
        </div>
      </Flex>
    </div>
  )
}
