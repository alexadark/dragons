/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React, { useContext, useEffect } from "react"
import ls from "local-storage"
import { ProgressBar, SmallDragons, QuestionSet } from "../../../components"

import { GlobalStateContext } from "../../../context/globalContextProvider"

export const Quizz = ({ dragons }) => {
  const state = useContext(GlobalStateContext)
  const progress = (100 / dragons.length) * (state.currentQuestions + 1)

  useEffect(() => {
    ls("allDragons", dragons)
  }, [])

  return (
    <>
      <div sx={{ bg: "grey", py: 25 }}>
        <Container>
          <Flex
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <h1
              sx={{
                color: "#fff",
                fontSize: [24, 36],
                letterSpacing: 2,
                m: 0,
                mb: [20, 20, 0],
              }}
            >
              Know Your HIDDEN Dragons Questionnaire
            </h1>
            <ProgressBar progress={`${progress}%`} />
          </Flex>
        </Container>
      </div>
      <SmallDragons dragons={dragons} />
      <div>
        <Container>
          <p sx={{ fontWeight: "bold", py: [20, 35, 45], m: 0 }}>
            Check yes for any of the following that apply to you.
          </p>
          <QuestionSet dragons={dragons} />
        </Container>
      </div>
    </>
  )
}
