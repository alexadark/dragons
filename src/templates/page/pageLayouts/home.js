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
      <Container sx={{ section: { py: [50, 100] }, maxWidth: 1200 }}>
        <section className="sectionOne" sx={{ textAlign: "center" }}>
          <h2 sx={{ fontSize: 50, color: "green" }}>{sectionOneTitle}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: sectionOneContent }}
            sx={{ p: { fontSize: 30 } }}
          />
        </section>
        <section className="sectionTwo">
          <h2 sx={{ textAlign: "center" }}>Dr. Daniel Amen</h2>
          <div
            dangerouslySetInnerHTML={{ __html: sectionTwoContent }}
            sx={{
              fontSize: 30,
              p: { fontSize: 30 },
              ".yellow": { color: "orange" },
              img: {
                display: "inlineBlock !important",
                maxWidth: 449,
                float: "left",
                p: "25px 50px 0px",
                width: "100%",
              },
            }}
          />
        </section>
        <section className="sectionThree" sx={{ textAlign: "center" }}>
          <Container sx={{ maxWidth: 900 }}>
            <h2 sx={{ fontSize: 36, color: "green" }}>{sectionThreeTitle}</h2>
            <h3 className="subtitle" sx={{ fontSize: 24 }}>
              {sectionThreeSubtitle}
            </h3>
          </Container>
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
                      height: ["100%", 200],
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      flexDirection: "column",
                      minWidth: 300,
                      // p: 40,
                    }}
                  >
                    <div>
                      <ImageFluid
                        img={featuredImage.node}
                        sx={{ width: 150 }}
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
        </section>
        <section className="sectionFour">
          <div
            dangerouslySetInnerHTML={{ __html: sectionFourContent }}
            sx={{
              fontSize: 30,
              ".red": {
                color: "#ff0000",
                fontStyle: "italic",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 40,
                fontFamily: "heading",
              },
            }}
          />
        </section>
      </Container>
    </>
  )
}
