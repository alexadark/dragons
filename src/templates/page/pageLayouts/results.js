/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React, { useContext } from "react"
import ls from "local-storage"
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../context/globalContextProvider"
import { ImageFluid } from "../../../components"

export const Results = () => {
  const allDragons = ls("allDragons")

  const state = useContext(GlobalStateContext)

  const localAnswers = ls("localAnswers")

  const detectedDragonsTitles = localAnswers
    ?.filter(answer => answer.detected)
    .map(dragon => dragon.title)

  const detectedDragonsData = allDragons.filter(dragon =>
    detectedDragonsTitles.includes(dragon.title)
  )
  console.log("det", detectedDragonsData)

  return (
    <>
      <div sx={{ bg: "grey", py: 25, textAlign: "center", color: "#fff" }}>
        <Container>
          <h1 sx={{ m: 0 }}>
            Know Your HiDDEN Dragons Questionnaire{" "}
            <span sx={{ color: "orange" }}>RESULTS</span>
          </h1>
        </Container>
      </div>
      <Container sx={{ mt: 35 }}>
        <div sx={{ textAlign: "center" }}>
          <h2 sx={{ fontSize: 72 }}>YOU DID IT!</h2>
          <div sx={{ fontWeight: "bold" }}>
            THE FOLLOWING DRAGONS HAVE BEEN DETECTED
            <Flex
              sx={{
                flexWrap: "wrap",
                mt: 35,
                mb: 60,
                justifyContent: "center",
              }}
            >
              {detectedDragonsData?.map(dragon => {
                const { title, featuredImage } = dragon
                return (
                  <div
                    sx={{
                      width: ["100%", "50%", "33.33%", "25%"],
                      p: 15,
                    }}
                  >
                    <Flex
                      sx={{
                        bg: "lightGrey",
                        height: 300,
                        justifyContent: "center",
                        alignItems: "center",
                        p: 40,
                      }}
                    >
                      <div>
                        <ImageFluid
                          img={featuredImage.node}
                          sx={{ minWidth: [100, 100, 250] }}
                        />
                        <div sx={{ fontWeight: 600 }}>{title}</div>
                      </div>
                    </Flex>
                  </div>
                )
              })}
            </Flex>
          </div>
        </div>
      </Container>
    </>
  )
}
