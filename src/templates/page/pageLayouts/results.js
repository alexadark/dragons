/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React from "react"
import ls from "local-storage"

export const Results = () => {
  const allDragons = ls("allDragons")
  console.log("allDragons", allDragons)

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
    </>
  )
}
