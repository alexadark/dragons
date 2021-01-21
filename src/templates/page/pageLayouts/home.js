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
      <div
        className="homeHero"
        sx={{
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Container sx={{ maxWidth: 1280, pt: 30, pb: 50 }}>
          <div
            sx={{
              pl: [0, 80, 130],
              position: "relative",
              textAlign: ["center", "left", "left"],
              "&:before": {
                content: "''",
                width: 114,
                height: 137,
                backgroundImage: `url(${arrow})`,
                backgroundSize: ["0%", "40%", "70%"],
                backgroundRepeat: "no-repeat",
                position: "absolute",
                left: 0,
                bottom: -40,
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
                fontSize: [30, 50, 70],
                lineHeight: 1,
                fontFamily: "heading",
                fontWeight: "bold",
                maxWidth: 830,
              }}
              dangerouslySetInnerHTML={{ __html: sentenceTwo }}
            />

            <div sx={{ fontSize: [20, 30], color: "#fff", fontWeight: 300 }}>
              {sentenceThree}
            </div>
            <h2
              sx={{
                fontSize: [36, 60, 87],
                fontFamily: "heading",
                fontWeight: "bold",
              }}
            >
              {sentenceFour}
            </h2>
          </div>
          <Link
            to="/quizz"
            sx={{
              width: ["100%", "100%", "100%", 967],
              display: "block",
              textAlign: "center",
              bg: "#ecdd2e",
              textTransform: "uppercase",
              fontSize: 18,
              py: 13,
              mb: [10, 30],
              "&:hover": {
                bg: "#ffff34",
              },
            }}
          >
            Start your Dragon Quizz
          </Link>
          <p
            sx={{
              fontSize: [16, 20],
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
            display: ["inlineBlock", "inline"],
            float: ["none", "left"],
            maxWidth: ["80%", 449],
            p: [0, "25px 50px 0"],
            width: "100%",
          },
        }}
      >
        <section className="sectionOne" sx={{ textAlign: "center" }}>
          <Container sx={{ maxWidth: 1200 }}>
            <h2 sx={{ fontSize: [30, 50], color: "green" }}>
              {sectionOneTitle}
            </h2>
            <iframe
              src="https://player.vimeo.com/video/502811902"
              width="640"
              height="361"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>

            <div
              dangerouslySetInnerHTML={{ __html: sectionOneContent }}
              sx={{ p: { fontSize: [20, 30] } }}
            />
          </Container>
        </section>
        <section
          className="sectionTwo"
          sx={{
            backgroundImage: `url(${bg2}) `,
            backgroundPosition: "center",

            backgroundSize: "cover",
          }}
        >
          <Container sx={{ maxWidth: 1200, color: "#fff" }}>
            <h2 sx={{ textAlign: "center", mt: 1, mb: [50, 80, 80] }}>
              Dr. Daniel Amen
            </h2>
            <div
              sx={{
                display: ["flex", "flex", "inline"],
                justifyContent: "center",
              }}
            >
              <img className="leftImage" src={drAmen} />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: sectionTwoContent }}
              sx={{
                fontSize: [16, 30],
                p: { fontSize: [16, 30] },
                ".yellow": { color: "orange" },
              }}
            />
          </Container>
        </section>
        <div
          className="sectionThree"
          sx={{
            textAlign: "center",
          }}
        >
          <Container
            sx={{
              maxWidth: 1280,
              backgroundImage: `url(${paperDragon})`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
              py: [50, 100],
            }}
          >
            <Container sx={{ maxWidth: 900, mb: 100, px: [0, 0] }}>
              <h2
                sx={{
                  fontWeight: 500,
                  fontSize: [30, 36],
                  color: "green",
                  textAlign: ["left", "center", "center"],
                }}
              >
                {sectionThreeTitle}
              </h2>
              <h3
                className="subtitle"
                sx={{
                  fontSize: [20, 24],
                  color: "#34495e",
                  textAlign: ["left", "center", "center"],
                  lineHeight: 1.2,
                }}
              >
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
                      m: "20px 50px 0",
                      maxHeight: 300,
                    }}
                  >
                    <div>
                      <Flex
                        sx={{
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={featuredImage.node.localFile.publicURL}
                          className={dragonClass}
                          alt=""
                          sx={{
                            display: "block",
                            width: "100%",
                            height: "auto",
                            maxWidth: 150,
                            "&.abandoned": { maxWidth: 400 },
                          }}
                        />
                        <div
                          sx={{
                            fontWeight: 600,
                            textAlign: "center",
                            fontSize: [18, 20],
                            color: "green",
                            fontFamily: "heading",
                          }}
                        >
                          {title}
                        </div>
                      </Flex>
                    </div>
                  </div>
                )
              })}
            </Flex>
          </Container>
        </div>
        <section className="sectionFour" sx={{ bg: "lightGrey" }}>
          <Container sx={{ maxWidth: 1200 }}>
            <div
              sx={{
                display: ["flex", "flex", "inline"],
                justifyContent: "center",
              }}
            >
              <img className="leftImage" src={book} />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: sectionFourContent }}
              sx={{
                // fontSize: 30,
                fontSize: [16, 30],
                ".red p": {
                  color: "#ff0000",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: [20, 40],
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
