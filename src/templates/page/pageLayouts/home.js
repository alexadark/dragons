/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { HomeHero } from "../../../components"

export const Home = ({ data }) => {
  const {
    title,
    slug,
    homeFields: { homeSteps, heroImage, homeTitle, homeSubtitle },
    allDragons: { dragons },
  } = data.wpPage
  return (
    <>
      <HomeHero img={heroImage} />
      <Container sx={{ textAlign: "center", py: 50, maxWidth: 970 }}>
        <div className="intro">
          <div>TAKE THE QUIZ TO</div>
          <div
            dangerouslySetInnerHTML={{ __html: homeTitle }}
            sx={{ fontSize: 36, fontWeight: 700, lineHeight: 1.3, my: 25 }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: homeSubtitle }}
            sx={{ mt: 30 }}
          />
          <Flex
            sx={{
              justifyContent: ["center", "center", "space-between"],
              flexWrap: "wrap",
              my: 50,
            }}
          >
            {homeSteps &&
              homeSteps.map(step => {
                const { stepTitle, stepText } = step

                return (
                  <div sx={{ maxWidth: ["100%", "50%", "25%"] }}>
                    <div sx={{ px: 25 }}>
                      <Flex sx={{ justifyContent: "center", mb: 36 }}>
                        <div
                          sx={{
                            width: 90,
                            height: 90,
                            bg: "green",
                            borderRadius: 50,
                          }}
                        ></div>
                      </Flex>
                      <h3>{stepTitle}</h3>
                      <p sx={{ maxWidth: 220 }}>{stepText}</p>
                    </div>
                  </div>
                )
              })}
          </Flex>
          <Flex sx={{ justifyContent: "center" }}>
            <Link to="quizz" sx={{ variant: "buttons.secondary" }}>
              Start the quiz
            </Link>
          </Flex>
        </div>
      </Container>
    </>
  )
}
