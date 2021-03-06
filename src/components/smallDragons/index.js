/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import { useContext, useEffect } from "react"
import { GlobalStateContext } from "../../context/globalContextProvider"
import { Checkmark } from "grommet-icons"
import { gsap } from "gsap"

export const SmallDragons = ({ dragons }) => {
  const state = useContext(GlobalStateContext)
  const detectedDragons = state.answers
    .filter(item => item.detected)
    .map(item => item.title)

  useEffect(() => {
    setTimeout(() => {
      gsap.to(".smallDragons", { duration: 2, opacity: 1 })
      gsap.from(".smallDragons", { duration: 1, y: 10 })
    }, 1000)
  }, [])

  return (
    <div sx={{ bg: "green", py: 20 }}>
      <Container>
        <Flex
          className="smallDragons"
          sx={{
            justifyContent: ["center", "space-between"],
            alignItems: "center",
            flexWrap: "wrap",
            opacity: 0,
          }}
        >
          {dragons &&
            dragons.map((item, i) => {
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
                <div className="dragon" key={i} sx={{ position: "relative" }}>
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
