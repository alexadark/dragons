/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

export const DragonQuestionSet = ({ dragonData }) => {
  const {
    dragonFields: { dragonQuestions },
    title,
  } = dragonData

  const limit = dragonQuestions.length / 2
  console.log("limit", limit)

  const { register, handleSubmit, watch, errors } = useForm()

  const [answers, setAnswers] = useState({})
  // console.log(
  //   "dragon",
  //   Object.values(dragon.questions).filter(item => item === "true")

  // )

  const [detected, setDetected] = useState(false)

  const [dragon, setDragon] = useState({})

  const onSubmit = async data => {
    console.log("data", data)

    setAnswers(data)
    await console.log("answers", answers)

    // const detected =
    //   Object.values(answers).filter(item => item === "true").length >= limit
    // console.log("detected", detected)

    // detected && (await setDetected(true))
    // await console.log("detected", true)
    // await setDragon({ title, answers, detected })
    // await console.log("dragon", dragon)
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
