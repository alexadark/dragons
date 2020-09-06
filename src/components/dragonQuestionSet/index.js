/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { useState } from "react"
import { useForm } from "react-hook-form"
import ls from "local-storage"
import { radioStyles } from "./styles"

export const DragonQuestionSet = ({ dragonData }) => {
  const {
    dragonFields: { dragonQuestions },
    title,
  } = dragonData

  const limit = dragonQuestions.length / 2
  console.log("limit", limit)

  const { register, handleSubmit, watch, errors } = useForm()

  const [dragon, setDragon] = useState({
    title,
    answers: {},
    detected: false,
  })

  const onSubmit = async data => {
    const isDragonDetected = async answers =>
      (await Object.values(answers).filter(item => item === "true").length) >=
      limit

    await setDragon({
      ...dragon,
      answers: data,
      detected: isDragonDetected(data) && true,
    })

    await console.log("dragon", dragon)
    //TODO: why it doesn't work
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
          return (
            <Flex
              className="question"
              key={i}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                pl: 35,
                pr: 50,
                py: 15,
              }}
            >
              <div sx={{ maxWidth: 630 }}>{question} </div>
              <Flex sx={{ ...radioStyles }}>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="yes"
                    name={question}
                    value={true}
                    ref={register}
                  />
                  <label htmlFor="yes">YES</label>
                </div>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="no"
                    name={question}
                    value={false}
                    ref={register}
                  />
                  <label htmlFor="no">NO</label>
                </div>
              </Flex>
            </Flex>
          )
        })}
        <Flex sx={{ justifyContent: "flex-end" }}>
          <input
            type="submit"
            value="next"
            sx={{
              width: 215,
              height: 51,
              border: "2px solid",
              borderColor: "orange",
              fontSize: 24,
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
                bg: "orange",
                color: "#fff",
              },
            }}
          />
        </Flex>
      </form>
    </div>
  )
}
