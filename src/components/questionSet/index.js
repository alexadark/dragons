/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import ls from "local-storage"
import { navigate } from "gatsby"
import { window } from "browser-monads"
import { radioStyles } from "./styles"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/globalContextProvider"

export const QuestionSet = ({ dragons }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const { currentQuestions, answers } = state

  const {
    dragonFields: { dragonQuestions },
  } = dragons[currentQuestions]

  const limit = 2

  const { register, handleSubmit, errors, reset } = useForm()

  const isDragonDetected = answers =>
    Object.values(answers).filter(item => item === "true").length >= limit

  /**
   * Adds a new answer to the total answers in context or updates an existing one!
   * @param {object} data - The data for this answer ({"question-0-1": "true", "question-1-1": "false"}) ...
   */
  const setAnswers = async data => {
    let _answers = [...answers]
    const newAnswer = {
      title: dragons[currentQuestions].title,
      answers: data,
      detected: isDragonDetected(data) && true,
    }

    //we go back to prev answered question
    if (answers.length > currentQuestions) {
      _answers[currentQuestions] = newAnswer
    } else {
      //new answer
      _answers = [...answers, newAnswer]
    }

    await dispatch({
      type: "SET_ANSWERS",
      answers: _answers,
    })
  }

  useEffect(() => {
    ls("localAnswers", answers)
  }, [answers])

  const next = () => {
    if (currentQuestions + 1 < dragons.length) {
      dispatch({
        type: "SET_CURRENT_QUESTIONS",
        currentQuestions: currentQuestions + 1,
      })
      window.scrollTo(0, 0)
    } else {
      navigate("/results")
    }
  }

  const back = () => {
    if (currentQuestions > 0) {
      dispatch({
        type: "SET_CURRENT_QUESTIONS",
        currentQuestions: currentQuestions - 1,
      })
      window.scrollTo(0, 0)
    } else {
      dispatch({
        type: "SET_CURRENT_QUESTIONS",
        currentQuestions: 0,
      })
    }
  }
  const onSubmit = data => {
    setAnswers(data)
    reset()
    next()
  }

  const handleBack = e => {
    e.preventDefault()
    reset()
    back()
  }

  const showBackButton = () =>
    currentQuestions > 0 && currentQuestions < dragons.length

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          ".question": {
            "&:nth-child(odd)": {
              bg: "lightGrey",
            },
          },
        }}
      >
        {dragonQuestions?.map((item, i) => {
          const question = item.questions
          const name = `question-${currentQuestions}-${i}`

          return (
            <Flex
              className="question"
              key={i}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: ["wrap", "wrap", "nowrap"],
                pl: 35,
                pr: 50,
                py: 15,
              }}
            >
              <div sx={{ maxWidth: [350, 400, 630], mb: [15, 15, 0] }}>
                {question}
              </div>

              <Flex sx={{ ...radioStyles, position: "relative" }}>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id={`yes-${name}`}
                    key={`yes-${name}`}
                    name={name}
                    value={true}
                    ref={register}
                    defaultChecked={
                      answers[currentQuestions]?.answers[name] === "true"
                    }
                    required
                  />

                  <label htmlFor="yes">YES</label>
                </div>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id={`no-${name}`}
                    key={`no-${name}`}
                    name={name}
                    value={false}
                    ref={register}
                    defaultChecked={
                      answers[currentQuestions]?.answers[name] === "false"
                    }
                    required
                  />
                  <label htmlFor="no">NO</label>
                </div>
              </Flex>
            </Flex>
          )
        })}
        <Flex
          sx={{
            justifyContent: ["center", "space-between"],
            px: [0, 0, 60],
            pb: [40, 0],
          }}
        >
          <button
            onClick={handleBack}
            sx={{
              ...buttonStyle,
              display: [showBackButton() ? "block" : "none", "block"],
              visibility: showBackButton() ? "visible" : "hidden",
            }}
          >
            Back
          </button>

          <input
            type="submit"
            value="next"
            sx={{
              ...buttonStyle,
            }}
          />
        </Flex>
      </form>

      {Object.values(errors)?.length > 0 && (
        <Flex sx={{ justifyContent: "center", mb: 40 }}>
          <div sx={{ variant: "text.error" }}>
            You must answer all questions
          </div>
        </Flex>
      )}
    </div>
  )
}

const buttonStyle = {
  width: [125, 215],
  mx: 10,
  height: [40, 51],
  border: "2px solid",
  borderColor: "green",
  fontSize: 18,
  fontFamily: "heading",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 14,
  mt: 25,
  variant: "transitions.s",
  bg: "transparent",
  cursor: "pointer",

  "&:hover": {
    bg: "green",
    color: "#fff",
  },
}
