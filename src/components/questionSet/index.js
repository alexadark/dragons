/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
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

  // const limit = dragonQuestions.length / 2
  const limit = 2

  const { register, handleSubmit, errors, reset } = useForm()

  const isDragonDetected = answers =>
    Object.values(answers).filter(item => item === "true").length >= limit

  const setAnswers = async data => {
    console.log("data", data)

    await dispatch({
      type: "SET_ANSWERS",
      answers: [
        ...answers,
        {
          title: dragons[currentQuestions].title,
          answers: data,
          detected: isDragonDetected(data) && true,
        },
      ],
    })
  }

  useEffect(() => {
    ls("localAnswers", answers)
  }, [state])

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

  const onSubmit = data => {
    setAnswers(data)
    reset()
    next(data)
  }

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
                    id="yes"
                    name={name}
                    value={true}
                    ref={register}
                    required
                  />

                  <label htmlFor="yes">YES</label>
                </div>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="no"
                    name={name}
                    value={false}
                    ref={register}
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
            justifyContent: ["center", "flex-end"],
            pr: [0, 0, 60],
            pb: [40, 0],
          }}
        >
          <input
            type="submit"
            value="next"
            sx={{
              width: 215,
              height: 51,
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
