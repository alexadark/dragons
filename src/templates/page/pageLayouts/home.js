/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { HomeHero, ImageFluid } from "../../../components"
import bg2 from "./images/bg-2.jpg"
import paperDragon from "./images/paper-dragon.png"
import drAmen from "./images/dr-amen.png"
import book from "./images/book.png"

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
      <div
        sx={{
          section: { py: [50, 100] },
          ".leftImage": {
            display: "inlineBlock",
            float: "left",
            maxWidth: 449,
            p: "25px 50px 0",
            width: "100%",
          },
        }}
      >
        <section className="sectionOne" sx={{ textAlign: "center" }}>
          <Container sx={{ maxWidth: 1200 }}>
            <h2 sx={{ fontSize: 50, color: "green" }}>{sectionOneTitle}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: sectionOneContent }}
              sx={{ p: { fontSize: 30 } }}
            />
          </Container>
        </section>
        <section
          className="sectionTwo"
          sx={{ backgroundImage: `url(${bg2}) ` }}
        >
          <Container sx={{ maxWidth: 1200, color: "#fff" }}>
            <h2 sx={{ textAlign: "center", mb: 80 }}>Dr. Daniel Amen</h2>
            <img className="leftImage" src={drAmen} />
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
          </Container>
        </section>
        <section
          className="sectionThree"
          sx={{
            textAlign: "center",
          }}
        >
          <Container
            sx={{
              maxWidth: 1280,
              backgroundImage: `url(${paperDragon})`,
              backgroundPosition: "fixed",
            }}
          >
            <Container sx={{ maxWidth: 900 }}>
              <h2 sx={{ fontSize: 36, color: "green" }}>{sectionThreeTitle}</h2>
              <h3 className="subtitle" sx={{ fontSize: 24 }}>
                {sectionThreeSubtitle}
              </h3>
            </Container>

            <Flex
              sx={{
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "flex-end",
              }}
            >
              {dragons?.map(dragon => {
                const { title, featuredImage, databaseId, slug } = dragon
                const dragonClass = slug.split("-")[0]
                console.log("img", dragonClass)
                return (
                  <div
                    key={databaseId}
                    sx={{
                      m: "20px 50px",
                      maxHeight: 300,
                    }}
                  >
                    <div>
                      <img
                        src={featuredImage.node.localFile.publicURL}
                        className={dragonClass}
                        alt=""
                        sx={{
                          display: "block",
                          width: "100%",
                          height: "auto",
                          maxWidth: 200,
                          "&.abandoned": { maxWidth: 430 },
                        }}
                      />
                      <div
                        sx={{
                          fontWeight: 600,
                          textAlign: "center",
                          fontSize: 20,
                          color: "green",
                          fontFamily: "heading",
                        }}
                      >
                        {title}
                      </div>
                    </div>
                  </div>
                )
              })}
            </Flex>
          </Container>
        </section>
        <section className="sectionFour" sx={{ bg: "lightGrey" }}>
          <Container sx={{ maxWidth: 1200 }}>
            <img className="leftImage" src={book} />
            <div
              dangerouslySetInnerHTML={{ __html: sectionFourContent }}
              sx={{
                // fontSize: 30,
                ".red": {
                  color: "#ff0000",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "40px !important",
                  fontFamily: "heading",
                },
              }}
            />
          </Container>
        </section>
      </div>
    </>
  )
}
