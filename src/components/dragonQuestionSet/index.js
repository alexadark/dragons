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

  const [answers, setAnswers] = useState({})

  const [detected, setDetected] = useState(false)

  const [dragon, setDragon] = useState({})

  const onSubmit = async data => {
    setAnswers(data)

    const isDragonDetected = async answers =>
      (await Object.values(answers).filter(item => item === "true").length) >=
      limit

    isDragonDetected(answers) && (await setDetected(true))

    // await console.log("detected", true)
    setDragon({ title, answers, detected })
    // await console.log("dragon", dragon)
    ls(title, { answers, detected })
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
                      "&:checked": { bg: "orange", width: 20, height: 20 },
                    }}
                  />
                  <label for="yes">YES</label>
                </div>

                <div>
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
