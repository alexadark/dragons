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
    <div>
      <Container>
        <h1>{title}</h1>
        <Flex>
          <img src={sourceUrl} alt={`image for ${title}`} />
        </Flex>
      </Container>
      <Flex>
        <Flex>
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
        </Flex>
        <div>
          <h2>How to Tame the {title}</h2>
          <div dangerouslySetInnerHTML={{ __html: dragonsTaming }} />
        </div>
      </Flex>
    </div>
  )
}
