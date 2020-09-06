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
                <div>
                  <input
                    type="radio"
                    id="yes"
                    name={question}
                    value={true}
                    ref={register}
                    sx={{
                      width: 20,
                      height: 20,
                      bg: "grey",
                      "&:checked": { bg: "orange" },
                    }}
                  />

                  <label
                    for="yes"
                    sx={{
                      mr: 20,
                      px: 20,
                      py: 10,
                      border: "1px solid black",
                    }}
                  >
                    YES
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="no"
                    name={question}
                    value={false}
                    ref={register}
                    sx={{
                      width: 20,
                      height: 20,
                      bg: "grey",
                      "&:checked": { bg: "orange" },
                    }}
                  />
                  <label
                    for="no"
                    sx={{
                      mr: 20,
                      px: 20,
                      py: 10,
                      border: "1px solid black",
                    }}
                  >
                    NO
                  </label>
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
