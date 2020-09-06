/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/globalContextProvider"

export const SmallDragons = ({ questions }) => {
  const state = useContext(GlobalStateContext)
  return (
    <div sx={{ bg: "green", py: 20 }}>
      <Container>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {questions?.map((item, i) => {
            const { dragonSmallDark, dragonSmallWhite } = item.dragonFields

            const whiteDragon = dragonSmallWhite?.localFile?.publicURL
            const darkDragon = dragonSmallDark?.localFile?.publicURL
            const done = state.currentQuestions > i
            const smallDragonImage = done ? darkDragon : whiteDragon
            return (
              <div key={i}>
                <img src={smallDragonImage} alt="" sx={{ m: 0 }} />
              </div>
            )
          })}
        </Flex>
      </Container>
    </div>
  )
}
