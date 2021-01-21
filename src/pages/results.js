/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import ls from "local-storage"
import { Router } from "@reach/router"
import {
  SmallDetectedDragons,
  SubmitForm,
  FinalResult,
  Layout,
  SEO,
} from "../components"

const Results = () => {
  const allDragons = ls("allDragons")

  const localAnswers = ls("localAnswers")

  const detectedDragonsTitles =
    localAnswers &&
    localAnswers.filter(answer => answer.detected).map(dragon => dragon.title)

  const detectedDragonsData =
    allDragons &&
    allDragons.filter(dragon => detectedDragonsTitles.includes(dragon.title))

  const ResultSubmit = ({ detectedDragonsData, localAnswers }) => {
    return (
      <Container sx={{ mt: 35 }}>
        <SmallDetectedDragons detectedDragonsData={detectedDragonsData} />
        <SubmitForm
          detectedDragonsData={detectedDragonsData}
          localAnswers={localAnswers}
        />
      </Container>
    )
  }

  return (
    <Layout>
      <SEO title="results" />
      <div sx={{ bg: "green", py: 25, textAlign: "center", color: "#fff" }}>
        <Container>
          <h1 sx={{ m: 0 }}>
            Know Your HIDDEN Dragons Quiz{" "}
            <span sx={{ color: "orange" }}>RESULTS</span>
          </h1>
        </Container>
      </div>
      <Router>
        <ResultSubmit
          detectedDragonsData={detectedDragonsData}
          localAnswers={localAnswers}
          path="results"
        />
        <FinalResult path="results/:id" />
      </Router>
    </Layout>
  )
}
export default Results
