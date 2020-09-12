/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
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
export const handleError = err => {
  console.log(`oh noooo something went wrong!!!! 💩`)
  console.log(err)
}

export const SubmitForm = ({ detectedDragonsData }) => {
  const resultsIds = detectedDragonsData?.map(dragon => dragon.databaseId)
  const [resultId, setResultId] = useState(null)
  const [resultErrors, setResultErrors] = useState(null)
  const [mailData, setMailData] = useState(null)

  const id = Date.now().toString()

  const [resultMutation] = useMutation(RESULT_MUTATION)
  const [sendEmail] = useMutation(SEND_EMAIL)
  useEffect(() => {
    if (!resultErrors && resultId) {
      const { data } = sendEmail({
        variables: {
          input: createEmailInput(mailData),
        },
      })
      navigate(`${resultId}`)
      console.log("mailData", data)
    }
  }, [resultId])

  const createResultsInput = data => {
    const { email, firstName } = data

    return {
      clientMutationId: id,
      emailInput: email,
      slugInput: id,
      firstNameInput: firstName,
      resultsInput: resultsIds,
    }
  }

  const createEmailInput = data => {
    const { email, firstName } = data
    return {
      clientMutationId: Date.now().toString(),
      to: email,
      from: "Dragon App<alexadark@gmail.com>",
      subject: "your Results to Dragons questionnary",
      body: `Hello ${firstName} these are you results and this is the url for your results "results/${resultId}"`,
    }
  }

  const { register, handleSubmit, watch, errors, reset } = useForm()

  const onSubmit = async mailData => {
    setMailData(mailData)
    const { data: resultData, errors: resultErrors } = await resultMutation({
      variables: {
        input: createResultsInput(mailData),
      },
    }).catch(handleError)
    setResultId(resultData.resultMutation.clientMutationId)

    reset()
  }
  return (
    <>
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
      <Flex sx={{ justifyContent: "center", mb: 50 }}>
        <form onSubmit={handleSubmit(onSubmit)} sx={{ ...styles }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            ref={register}
          />
          <input type="email" name="email" placeholder="Email" ref={register} />
          <Flex sx={{ justifyContent: "center" }}>
            <input type="submit" value="send my results" />
          </Flex>
        </form>
        {resultErrors && <h3>{resultErrors}</h3>}
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
