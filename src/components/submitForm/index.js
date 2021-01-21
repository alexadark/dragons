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

  const resultsTitlesArray = detectedDragonsData?.map(dragon => {
    return dragon.title
  })

  const resultsTitles = resultsTitlesArray.join(" - ")

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
    }
  }, [resultId])

  const createResultsInput = mailData => {
    const { email, firstName, age } = mailData

    const results = `
    Name: ${firstName},
    Email: ${email},
    Dragons Detected:${resultsTitles}
    `

    return {
      clientMutationId: id,
      emailInput: email,
      slugInput: id,
      firstNameInput: firstName,
      ageInput: age,
      dragonsInput: resultsIds,
      resultsInput: results,
    }
  }

  const createEmailInput = mailData => {
    const { email, firstName } = mailData
    let _titleHTML = `<ul>`
    resultsTitlesArray.forEach(title => (_titleHTML += `<li>${title}</li>`))
    _titleHTML += `</ul>`
    return {
      clientMutationId: Date.now().toString(),
      to: email,
      from: "Dragon App<alexadark@gmail.com>",
      subject: "Your Results Are IN!",
      body: `<p style="color:red; font-size:30px">Thank you for taking my Dragons from the Past Quiz. Based on your answers, the following Dragons have been detected:</p>
      ${_titleHTML}
      <p>Dragons from the Past are issues from memories and events in your life that continue to breathe fire on your emotional brain. Unless you recognize and tame your inner Dragons, they can steal your happiness, damage your relationships, steal your health, rob your ability to cope with stress, and limit your destiny. When Dragons control your brain, they can contribute to anxiety, depression, addictions, and other mental health conditions. And your entire life suffers.</p>
      <p>The good news is that you have an opportunity to change that. Once you become aware of and tame your Dragons, you can break bad habits, shut down self-defeating thoughts, shore up your capacity to cope with uncertainty, and live your best life.</p>
      <p>Getting to know your Dragons is the first step in learning to tame them so you can gain control of your emotions and optimize your life.
      </p>
      <p>Click below to download your FREE report to discover more about the origins of your Dragons, what triggers them, and the reactions they cause.</p>
      <a href="results/${resultId}"> GET MY FREE DRAGONS REPORT</a>
      <p>Congratulations! You’re on your way to becoming a Dragon Tamer!</p>
      <p>To your brain health,</p>
      <p>Daniel G. Amen, MD</p>
      <em>P.S. Want to learn more about your dragons? Check out my book Your Brain Is Always Listening, which gives you simple strategies to tame your Dragons. When you pre-order, you’ll receive exclusive bonus gifts that will help you become a powerful Dragon Tamer.
      </em>
      `,
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
