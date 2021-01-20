/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import bg1 from "./images/bg-1.jpg"
import bg2 from "./images/bg-2.jpg"
import paperDragon from "./images/paper-dragon.png"
import drAmen from "./images/dr-amen.png"
import book from "./images/book.png"
import arrow from "./images/arrow.png"

export const Home = ({ data }) => {
  const {
    homeHero: {
      sentenceOne,
      sentenceTwo,
      sentenceThree,
      sentenceFour,
      sentenceFive,
    },
    homeSectionOne: { sectionOneTitle, sectionOneContent },
    homeSectionTwo: { sectionTwoContent },
    homeSectionThree: { sectionThreeTitle, sectionThreeSubtitle },
    homeSectionFour: { sectionFourContent },
    allDragons: { dragons },
  } = data.wpPage

  return (
    <>
      <div className="homeHero" sx={{ backgroundImage: `url(${bg1}) ` }}>
        <Container sx={{ maxWidth: 1280, pt: 30, pb: 60 }}>
          <div
            sx={{
              pl: 130,
              position: "relative",
              "&:before": {
                content: "''",
                width: 114,
                height: 137,
                backgroundImage: `url(${arrow})`,
                position: "absolute",
                left: 0,
                bottom: 0,
              },
            }}
          >
            <div
              sx={{ fontSize: 16, fontFamily: "heading", fontWeight: "bold" }}
            >
              {sentenceOne}
            </div>
            <h1
              sx={{
                color: "orange",
                fontSize: 70,
                lineHeight: 1,
                fontFamily: "heading",
                fontWeight: "bold",
                maxWidth: 830,
              }}
              dangerouslySetInnerHTML={{ __html: sentenceTwo }}
            />

            <div sx={{ fontSize: 30, color: "#fff", fontWeight: 300 }}>
              {sentenceThree}
            </div>
            <h2
              sx={{ fontSize: 87, fontFamily: "heading", fontWeight: "bold" }}
            >
              {sentenceFour}
            </h2>
          </div>
          <Link
            to="/quizz"
            sx={{
              width: 967,
              display: "block",
              textAlign: "center",
              bg: "#ecdd2e",
              textTransform: "uppercase",
              fontSize: 18,
              py: 20,
              mb: 30,
              "&:hover": {
                bg: "#ffff34",
              },
            }}
          >
            Start your Dragon Quizz
          </Link>
          <p
            sx={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#fff",
              maxWidth: 900,
              span: { color: "orange" },
            }}
            dangerouslySetInnerHTML={{ __html: sentenceFive }}
          />
        </Container>
      </div>
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
