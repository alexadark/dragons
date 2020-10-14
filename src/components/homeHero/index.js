/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import { Link } from "gatsby"
import { ImageFluid } from "../index"

export const HomeHero = ({ img }) => {
  return (
    <div sx={{ bg: "grey", py: 55 }}>
      <Container sx={{ maxWidth: "l" }}>
        <Flex
          sx={{
            justifyContent: ["center", "center", "space-between"],
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            className="text"
            sx={{
              fontSize: 36,
              color: "#fff",
              fontFamily: "heading",
              textAlign: "center",
              lineHeight: 1.5,
              mb: [50, 50, 0],
            }}
          >
            Are Hidden Dragons
            <div sx={{ color: "orange", fontSize: 80, lineHeight: 1 }}>
              Breathing <div sx={{ fontSize: 130, lineHeight: 0.9 }}>Fire</div>
            </div>
            On your<span sx={{ color: "green" }}> Emotional </span>Brain?
            <Flex sx={{ justifyContent: "center", mt: 30 }}>
              <Link
                to="/quizz"
                sx={{
                  variant: "buttons.primary",
                  color: "#fff",
                }}
              >
                Take the Quizz
              </Link>
            </Flex>
          </div>
          <div className="image" sx={{ width: ["90%", "40%", "50%"] }}>
            <ImageFluid img={img} sx={{ maxWidth: 418 }} />
          </div>
        </Flex>
      </Container>
    </div>
  )
}
