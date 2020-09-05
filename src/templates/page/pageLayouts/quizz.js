/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React from "react"
import { ProgressBar, SmallDragons } from "../../../components"

export const Quizz = ({ questions }) => {
  return (
    <>
      <div sx={{ bg: "grey", py: 25 }}>
        <Container>
          <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <h1 sx={{ color: "#fff", fontSize: 36, letterSpacing: 2, m: 0 }}>
              Know Your HIDDEN Dragons Questionnaire
            </h1>
            <ProgressBar progress="7.69%" />
          </Flex>
        </Container>
      </div>
      <SmallDragons questions={questions} />
    </>
  )
}
