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
import { useMutation, gql } from "@apollo/client"
import { v4 as uuidv4 } from "uuid"

const ANSWER_MUTATION = gql`
  mutation($input: ResultMutationInput!) {
    resultMutation(input: $input) {
      resultSubmitted
      clientMutationId
    }
  }
`

export const Results = () => {
  const allDragons = ls("allDragons")

  const state = useContext(GlobalStateContext)

  const localAnswers = ls("localAnswers")
  console.log(
    "answers",
    localAnswers.map(answer => <p>{answer}</p>)
  )

  const resultTitles = localAnswers
    ?.filter(answer => answer.detected)
    .map(item => item.title)
  const resultsIds = allDragons
    .filter(dragon => resultTitles.includes(dragon.title))
    .map(dragon => dragon.databaseId)
  console.log("resultsId", resultsIds)

  const [resultMutation] = useMutation(ANSWER_MUTATION)

  const createInput = data => {
    const { email, firstName } = data
    return {
      clientMutationId: uuidv4(),
      emailInput: email,
      firstNameInput: firstName,
      // answersInput: localAnswers.map(answer => <p>{answer}</p>),
      resultsInput: resultsIds,
    }
  }

  const detectedDragonsTitles = localAnswers
    ?.filter(answer => answer.detected)
    .map(dragon => dragon.title)

  const detectedDragonsData = allDragons?.filter(dragon =>
    detectedDragonsTitles.includes(dragon.title)
  )
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = async data => {
    await resultMutation({
      variables: {
        input: createInput(data),
      },
    })
  }

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
