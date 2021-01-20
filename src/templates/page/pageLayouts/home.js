/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { HomeHero, ImageFluid } from "../../../components"

export const Home = ({ data }) => {
  const {
    homeFields: { homeSteps, heroImage, homeTitle, homeSubtitle },
  } = data.wpPage

  const {
    homeSectionOne: { sectionOneTitle, sectionOneContent },
    homeSectionTwo: { sectionTwoContent },
    homeSectionThree: { sectionThreeTitle, sectionThreeSubtitle },
    homeSectionFour: { sectionFourContent },
    allDragons: { dragons },
  } = data.wpPage

  return (
    <>
      <HomeHero img={heroImage} />
      <Container sx={{ py: 50, maxWidth: 970 }}>
        <div className="sectionOne">
          <h2>{sectionOneTitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: sectionOneContent }} />
        </div>
        <div className="sectionTwo">
          <h2>Dr. Daniel Amen</h2>
          <div dangerouslySetInnerHTML={{ __html: sectionTwoContent }} />
        </div>
        <div className="sectionThree">
          <h2>{sectionThreeTitle}</h2>
          <div className="subtitle">{sectionThreeSubtitle}</div>
          <Flex sx={{ justifyContent: "center", flexWrap: "wrap" }}>
            {dragons?.map(dragon => {
              const { title, featuredImage } = dragon
              return (
                <div
                  sx={{
                    width: ["100%", "50%", "33.33%", "25%"],
                    p: 15,
                  }}
                >
                  <Flex
                    sx={{
                      height: ["100%", 300],
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      flexDirection: "column",
                      // p: 40,
                    }}
                  >
                    <div>
                      <ImageFluid
                        img={featuredImage.node}
                        sx={{ width: 250 }}
                      />
                      <div
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {title}
                      </div>
                    </div>
                  </Flex>
                </div>
              )
            })}
          </Flex>
        </div>
        <div className="sectionFour">
          <div dangerouslySetInnerHTML={{ __html: sectionFourContent }} />
        </div>
      </Container>
    </>
  )
}
