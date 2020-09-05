/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React from "react"

export const SmallDragons = ({ questions }) => {
  return (
    <div sx={{ bg: "green", py: 20 }}>
      <Container>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {questions?.map((item, i) => {
            const { dragonSmallDark, dragonSmallWhite } = item.dragonFields

            const whiteDragon = dragonSmallWhite?.localFile?.publicURL
            const darkDragon = dragonSmallDark?.localFile?.publicURL
            // const smallDragonImage = done ? darkDragon : whiteDragon
            return (
              <div key={i}>
                <img src={whiteDragon} alt="" sx={{ m: 0 }} />
              </div>
            )
          })}
        </Flex>
      </Container>
    </div>
  )
}
