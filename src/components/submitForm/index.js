/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useForm } from "react-hook-form"
import ls from "local-storage"
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

export const SubmitForm = ({ detectedDragonsData }) => {
  const resultsIds = detectedDragonsData?.map(dragon => dragon.databaseId)

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

  const { register, handleSubmit, watch, errors, reset } = useForm()

  const onSubmit = async data => {
    await resultMutation({
      variables: {
        input: createInput(data),
      },
    })
    reset()
  }
  return (
    <>
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
    </>
  )
}
