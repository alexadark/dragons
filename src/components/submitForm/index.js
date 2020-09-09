/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useForm } from "react-hook-form"
import { useMutation, gql } from "@apollo/client"
import { v4 as uuidv4 } from "uuid"

const RESULT_MUTATION = gql`
  mutation($input: ResultMutationInput!) {
    resultMutation(input: $input) {
      resultSubmitted
      clientMutationId
    }
  }
`

const SEND_EMAIL = gql`
  mutation($input: SendEmailInput!) {
    sendEmail(input: $input) {
      origin
      sent
      message
    }
  }
`
export const handleError = err => {
  console.log(`oh noooo something went wrong!!!! 💩`)
  console.log(err)
}

export const SubmitForm = ({ detectedDragonsData, localAnswers }) => {
  const resultsIds = detectedDragonsData?.map(dragon => dragon.databaseId)

  const [resultMutation] = useMutation(RESULT_MUTATION)
  const [sendEmail] = useMutation(SEND_EMAIL)

  const createResultsInput = data => {
    const { email, firstName } = data
    return {
      clientMutationId: uuidv4(),
      emailInput: email,
      slugInput: Date.now().toString(),
      firstNameInput: firstName,
      resultsInput: resultsIds,
    }
  }

  const createEmailInput = data => {
    const { email, firstName } = data
    return {
      clientMutationId: uuidv4(),
      to: email,
      from: "Dragon App <alexadark@gmail.com>",
      subject: "your Results to Dragons questionnary",
      body: `Hello ${firstName} these are you results and this is the url for your results ${Date.now().toString()}`,
    }
  }

  const { register, handleSubmit, watch, errors, reset } = useForm()

  const onSubmit = async mailData => {
    await resultMutation({
      variables: {
        input: createResultsInput(mailData),
      },
    }).catch(handleError)
    const { data } = await sendEmail({
      variables: {
        input: createEmailInput(mailData),
      },
    })
    console.log("data", data)
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
