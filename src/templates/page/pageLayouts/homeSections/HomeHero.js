/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { Link } from "gatsby"
import bg1 from "../images/bg-1.jpg"
import arrow from "../images/arrow.png"

export const HomeHero = ({ homeHero }) => {
  const {
    sentenceOne,
    sentenceTwo,
    sentenceThree,
    sentenceFour,
    sentenceFive,
  } = homeHero
  return (
    <div
      className="homeHero"
      sx={{
        backgroundImage: `url(${bg1})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Container sx={{ maxWidth: 1290, pt: 30, pb: 50 }}>
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
          <div sx={{ fontSize: 16, fontFamily: "heading", fontWeight: "bold" }}>
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
  )
}
