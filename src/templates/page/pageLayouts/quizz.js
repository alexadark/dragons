/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React, { useContext } from "react"
import { ProgressBar, SmallDragons, QuestionSet } from "../../../components"

import { GlobalStateContext } from "../../../context/globalContextProvider"

export const Quizz = ({ dragons }) => {
  const state = useContext(GlobalStateContext)
  const progress = (100 / dragons.length) * (state.currentQuestions + 1)

  return (
    <>
      <div sx={{ bg: "grey", py: 25 }}>
        <Container>
          <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <h1 sx={{ color: "#fff", fontSize: 36, letterSpacing: 2, m: 0 }}>
              Know Your HIDDEN Dragons Questionnaire
            </h1>
            <ProgressBar progress={`${progress}%`} />
          </Flex>
        </Container>
      </div>
      <SmallDragons dragons={dragons} />
      <div>
        <Container>
          <p sx={{ fontWeight: "bold", py: 40 }}>
            Check yes for any of the following that apply to you or your
            ancestors.
          </p>
          <QuestionSet dragons={dragons} />
        </Container>
      </div>
    </>
  )
}
