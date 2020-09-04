/** @jsx jsx */
import { jsx, Flex, Container, Button } from "theme-ui"
import { Link } from "gatsby"
import { ImageFixed } from "../index"

export const HomeHero = ({ img }) => {
  return (
    <div sx={{ bg: "grey", py: 55 }}>
      <Container sx={{ maxWidth: "l" }}>
        <Flex sx={{ justifyContent: "space-between" }}>
          <div
            className="text"
            sx={{
              fontSize: 36,
              color: "#fff",
              fontFamily: "heading",
              textAlign: "center",
            }}
          >
            Are Dragons
            <div sx={{ color: "orange", fontSize: 80 }}>
              Breathing <div sx={{ fontSize: 130 }}>Fire</div>
            </div>
            On your<span sx={{ color: "green" }}> Emotional </span>Brain?
            <Link to="/quizz" variant="buttons.primary">
              Take the Quizz
            </Link>
          </div>
          <div className="image">
            <ImageFixed img={img} />
          </div>
        </Flex>
      </Container>
    </div>
  )
}
