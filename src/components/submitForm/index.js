/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation, gql } from "@apollo/client"
import { navigate } from "gatsby"

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

export const SubmitForm = ({ detectedDragonsData }) => {
  const resultsIds =
    detectedDragonsData && detectedDragonsData.map(dragon => dragon.databaseId)
  const [resultId, setResultId] = useState(null)
  const [resultErrors, setResultErrors] = useState(null)
  const [mailData, setMailData] = useState(null)

  const handleError = err => {
    console.log(`oh noooo something went wrong!!!! 💩`)
    console.log(err)
    setResultErrors(err)
  }

  const id = Date.now().toString()

  const [resultMutation] = useMutation(RESULT_MUTATION)
  const [sendEmail] = useMutation(SEND_EMAIL)

  useEffect(() => {
    if (!resultErrors && resultId) {
      sendEmail({
        variables: {
          input: createEmailInput(mailData),
        },
      })
      navigate(`${resultId}`, { replace: true })
      // console.log("mailData", data)
    }
  }, [resultId])

  const createResultsInput = mailData => {
    const { email, firstName, age } = mailData

    return {
      clientMutationId: id,
      emailInput: email,
      slugInput: id,
      firstNameInput: firstName,
      ageInput: age,
      resultsInput: resultsIds,
    }
  }

  const createEmailInput = mailData => {
    const { email, firstName } = mailData
    return {
      clientMutationId: Date.now().toString(),
      to: email,
      from: "Dragon App<alexadark@gmail.com>",
      subject: "your Results to Dragons questionnary",
      body: `Hello ${firstName} these are you results and this is the url for your results "results/${resultId}"`,
    }
  }

  const { register, handleSubmit, errors, reset } = useForm()

  const onSubmit = async mailData => {
    try {
      setResultErrors(null)
      setMailData(mailData)
      const { data: resultData, errors } = await resultMutation({
        variables: {
          input: createResultsInput(mailData),
        },
      })
      console.log("resultData", resultData)
      console.log("errors", errors)

      setResultId(resultData.resultMutation.clientMutationId)

      reset()
    } catch (error) {
      console.log(">>> resultErrors", error)
      handleError(error)
    }
  }
  return (
    <>
      <Container sx={{ maxWidth: "l", mb: 40 }}>
        <Flex
          sx={{
            textAlign: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          NOW IT’S TIME TO LEARN HOW TO TAME YOUR DRAGONS SO YOU CAN FEEL
          HAPPIER, CALMER, AND MORE IN CONTROL OF YOUR EMOTIONS.
        </Flex>
      </Container>
      <h2
        sx={{
          textTransform: "uppercase",
          color: "orange",
          fontSize: 40,
          textAlign: "center",
          fontWeight: 400,
        }}
      >
        where should we send your results?
      </h2>
      <Flex sx={{ alignItems: "center", mb: 50, flexDirection: "column" }}>
        <form onSubmit={handleSubmit(onSubmit)} sx={{ ...styles }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            ref={register({ required: true })}
          />
          {errors.firstName && "First Name is required"}
          <input
            type="text"
            name="age"
            placeholder="Age"
            ref={register({ required: true })}
          />
          {errors.age && "Age is Required"}
          <input
            type="email"
            name="email"
            placeholder="Email"
            ref={register({ required: true })}
          />
          {errors.email && "Email is Required"}
          <Flex sx={{ justifyContent: "center" }}>
            <input type="submit" value="send my results" />
          </Flex>
        </form>
        {resultErrors && (
          <div
            sx={{
              variant: "text.error",
            }}
          >
            You cannot submit several times with the same email
          </div>
        )}
      </Flex>
    </>
  )
}

const styles = {
  input: {
    display: "block",
  },
  'input[type="text"], input[type="email"]': {
    border: "2px solid",
    borderColor: "borderColor",
    height: 51,
    width: 340,
    mb: 20,
    px: 20,
  },
  'input[type="submit"]': {
    variant: "buttons.primary",
    bg: "transparent",
    width: 233,
    "&:hover": { color: "#fff", bg: "primary" },
  },
}
