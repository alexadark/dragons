/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import ls from "local-storage"

export const DragonQuestionSet = ({ dragonData }) => {
  const {
    dragonFields: { dragonQuestions },
    title,
  } = dragonData

  const limit = dragonQuestions.length / 2
  console.log("limit", limit)

  const { register, handleSubmit, watch, errors } = useForm()

  // const [answers, setAnswers] = useState({})

  // const [detected, setDetected] = useState(false)

  const [dragon, setDragon] = useState({
    title,
    answers: {},
    detected: false,
  })

  const onSubmit = async data => {
    // setDragon({ ...dragon, answers: data })
    console.log("data", data)

    const isDragonDetected = async answers =>
      (await Object.values(answers).filter(item => item === "true").length) >=
      limit

    await setDragon({
      ...dragon,
      answers: data,
      detected: isDragonDetected(data) && true,
    })
    console.log("dragon", dragon)

    // // await console.log("detected", true)
    // setDragon({ title, answers, detected })
    // // await console.log("dragon", dragon)
    // ls(title, { answers, detected })
  }

  return (
    <div key={title}>
      <h3>{title}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {dragonQuestions?.map((item, i) => {
          const question = item.questions
          return (
            <Flex
              className="question"
              key={i}
              sx={{ justifyContent: "space-between" }}
            >
              <div sx={{ maxWidth: 630, py: 20 }}>{question} </div>
              <Flex>
                <label
                  sx={{
                    mr: 20,
                    px: 20,
                    py: 10,
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="radio"
                    id="yes"
                    name={question}
                    value={true}
                    ref={register}
                    sx={{
                      "&:checked": { bg: "orange", width: 20, height: 20 },
                    }}
                  />
                  YES
                </label>

                <label
                  sx={{
                    mr: 20,
                    px: 20,
                    py: 10,
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="radio"
                    id="no"
                    name={question}
                    value={false}
                    ref={register}
                    sx={{
                      "&:checked": { bg: "orange", width: 20, height: 20 },
                    }}
                  />
                  NO
                </label>
              </Flex>
            </Flex>
          )
        })}
        <input type="submit" value="next" />
      </form>
    </div>
  )
}
