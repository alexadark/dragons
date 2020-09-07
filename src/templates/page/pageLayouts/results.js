/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React, { useContext } from "react"
import ls from "local-storage"
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../context/globalContextProvider"
import { SmallDetectedDragons } from "../../../components"

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
        <SmallDetectedDragons detectedDragonsData={detectedDragonsData} />
      </Container>
    </>
  )
}
