/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React, { useState } from "react"
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
    <div key={title}>
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
                  <label for="yes">YES</label>
                </div>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="no"
                    name={question}
                    value={false}
                    ref={register}
                  />
                  <label for="no">NO</label>
                </div>
              </Flex>
            </Flex>
          )
        })}
        <input type="submit" value="next" />
      </form>
    </div>
  )
}
