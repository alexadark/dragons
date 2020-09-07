/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React, { useContext } from "react"
import {
  ProgressBar,
  SmallDragons,
  DragonQuestionSet,
} from "../../../components"

import { GlobalStateContext } from "../../../context/globalContextProvider"

export const Quizz = ({ questions }) => {
  const state = useContext(GlobalStateContext)
  const progress = (100 / questions.length) * (state.currentQuestions + 1)

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
      <SmallDragons questions={questions} />
      <div>
        <Container>
          <p sx={{ fontWeight: "bold", py: 40 }}>
            Check yes for any of the following that apply to you or your
            ancestors.
          </p>
          <DragonQuestionSet questions={questions} />
        </Container>
      </div>
    </>
  )
}
