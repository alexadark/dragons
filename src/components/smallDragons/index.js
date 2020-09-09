/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/globalContextProvider"
import { Checkmark } from "grommet-icons"

export const SmallDragons = ({ dragons }) => {
  const state = useContext(GlobalStateContext)
  const detectedDragons = state.answers
    .filter(item => item.detected)
    .map(item => item.title)

  return (
    <div sx={{ bg: "green", py: 20 }}>
      <Container>
        <Flex
          sx={{
            justifyContent: ["center", "space-between"],
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {dragons?.map((item, i) => {
            const {
              title,
              dragonFields: { dragonSmallDark, dragonSmallWhite },
            } = item

            const showDetected = detectedDragons.includes(title)
              ? "visble"
              : "hidden"

            const whiteDragon = dragonSmallWhite?.localFile?.publicURL
            const darkDragon = dragonSmallDark?.localFile?.publicURL
            const done = state.currentQuestions > i
            const smallDragonImage = done ? darkDragon : whiteDragon
            return (
              <div key={i} sx={{ position: "relative" }}>
                <div sx={{ px: 7 }}>
                  <img src={smallDragonImage} alt="" sx={{ m: 0 }} />
                  <div
                    className="detected"
                    sx={{
                      position: "absolute",
                      left: 10,
                      top: 15,
                      visibility: `${showDetected}`,
                    }}
                  >
                    <Checkmark
                      color="#fff"
                      sx={{ polyline: { strokeWidth: 5 } }}
                    />
                    <div
                      sx={{ color: "#fff", fontSize: 8, fontWeight: "bold" }}
                    >
                      DETECTED
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Flex>
      </Container>
    </div>
  )
}
