/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React, { useContext } from "react"
import ls from "local-storage"
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../context/globalContextProvider"
import { SmallDetectedDragons } from "../../../components"
import { useForm } from "react-hook-form"

export const Results = () => {
  const allDragons = ls("allDragons")

  const state = useContext(GlobalStateContext)

  const localAnswers = ls("localAnswers")

  const detectedDragonsTitles = localAnswers
    ?.filter(answer => answer.detected)
    .map(dragon => dragon.title)

  const detectedDragonsData = allDragons?.filter(dragon =>
    detectedDragonsTitles.includes(dragon.title)
  )
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = data => console.log(data)

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

        <h2
          sx={{
            textTransform: "uppercase",
            color: "orange",
            fontSize: 36,
            textAlign: "center",
          }}
        >
          where should we send your results?
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            ref={register}
          />
          <input type="email" name="email" placeholder="Email" ref={register} />
          <input type="submit" value="send my results" />
        </form>
      </Container>
    </>
  )
}
