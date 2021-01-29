/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation, gql } from "@apollo/client"
import { navigate } from "gatsby"
import config from "../../../config"
import slashes from "remove-trailing-slash"

const url = slashes(config.siteUrl)

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
    return dragon.title.replace(",", " ")
  })

  const resultsTitles = resultsTitlesArray?.join(", ")

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

  const createResultsInput = (mailData, resultId) => {
    const { email, firstName } = mailData

    const results = `
    Name: ${firstName},
    Email: ${email},
    Results URL: ${url}/results/${resultId},
    ${resultsTitles}
    `

    return {
      clientMutationId: id,
      emailInput: email,
      slugInput: id,
      firstNameInput: firstName,
      phoneInput: phone,
      dragonsInput: resultsIds,
      resultsInput: results,
    }
  }

  const createEmailInput = mailData => {
    const { email } = mailData
    let _titleHTML = `<ul>`
    resultsTitlesArray.forEach(
      title =>
        (_titleHTML += `<li style="font-family: 'Open Sans', sans-serif; text-transform: uppercase">${title}</li>`)
    )
    _titleHTML += `</ul>`
    return {
      clientMutationId: id,
      to: email,
      from: "Daniel G. Amen, MD <support@amenuniversity.com>",
      subject: "Your Results Are IN!",
      body: `
      <em>*By opt-ing in, you are choosing to subscribe to our BrainMD and/or Amen Clinics email newsletters. You may opt out or change your preferences at any time. If you unsubscribe, you will still receive your results. Your results and information will never be distributed or shared. </em>
      <p style="font-family: 'Open Sans', sans-serif">
      Thank you for taking my Dragons from the Past Quiz. Based on your answers, the
      following Dragons have been detected:
    </p>
    ${_titleHTML}
    <p style="font-family: 'Open Sans', sans-serif">
      Dragons from the Past are issues from memories and events in your life that
      continue to breathe fire on your emotional brain. Unless you recognize and
      tame your inner Dragons, they can steal your happiness, damage your
      relationships, steal your health, rob your ability to cope with stress, and
      limit your destiny. When Dragons control your brain, they can contribute to
      anxiety, depression, addictions, and other mental health conditions. And your
      entire life suffers.
    </p>
    <p style="font-family: 'Open Sans', sans-serif">
      The good news is that you have an opportunity to change that. Once you become
      aware of and tame your Dragons, you can break bad habits, shut down
      self-defeating thoughts, shore up your capacity to cope with uncertainty, and
      live your best life.
    </p>
    <p style="font-family: 'Open Sans', sans-serif">
      Getting to know your Dragons is the first step in learning to tame them so you
      can gain control of your emotions and optimize your life.
    </p>
    <p style="font-family: 'Open Sans', sans-serif">
      Click below to download your FREE report to discover more about the origins of
      your Dragons, what triggers them, and the reactions they cause.
    </p>
    <div style="display: flex; justify-content: center">
      <a
        href="${url}/results/${resultId}"
        target="_blank"
        style="
          display: block;
          background: #ecdd2e;
          text-align: center;
          text-transform: uppercase;
          font-size: 30px;
          padding: 20px 80px;
          max-width: 300px;
          font-family: 'Open Sans', sans-serif;
          text-decoration: none;
          font-size: 16px;
          color: black;
          font-weight: 600;
          margin: 30px 10px;
        "
      >
        GET MY FREE DRAGONS REPORT</a
      >
    </div>
    <p style="font-family: 'Open Sans', sans-serif">
      Congratulations! You’re on your way to becoming a Dragon Tamer!
    </p>
    <p style="font-family: 'Open Sans', sans-serif">To your brain health,</p>
    <p style="font-family: 'Open Sans', sans-serif">Daniel G. Amen, MD</p>
    <em style="font-family: 'Open Sans', sans-serif"
      >P.S. Want to learn more about your dragons? Check out my book
      <a href="https://yourbrainisalwayslistening.com/" target="_blank"
        >Your Brain Is Always Listening</a
      >, which gives you simple strategies to tame your Dragons. When you
      <a href="https://yourbrainisalwayslistening.com/" target="_blank">pre-order</a
      >, you’ll receive exclusive bonus gifts that will help you become a powerful
      Dragon Tamer.
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
          input: createResultsInput(mailData, id),
        },
      })
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
          color: "green",
          fontSize: 40,
          textAlign: "center",
          fontWeight: 600,
          mb: 40,
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
    // width: 233,
    fontSize: 18,
    "&:hover": { color: "#fff", bg: "primary" },
  },
}
