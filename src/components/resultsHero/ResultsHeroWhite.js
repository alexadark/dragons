/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui"
import book from "../../images/results-book.png"

export const ResultsHeroWhite = () => {
  return (
    <div>
      <Container sx={{ maxWidth: 1290 }}>
        <Flex
          sx={{
            justifyContent: "space-evenly",
            maxWidth: 1080,
            flexDirection: ["column", "row"],
            py: 20,
          }}
        >
          <Flex
            className="left image"
            sx={{
              justifyContent: "center",
              maxWidth: 230,
              minWidth: 160,
              width: ["70%", "auto"],
              mx: ["auto", 0],
            }}
          >
            <div>
              <img sx={{ mb: 0 }} src={book} alt="" />
            </div>
          </Flex>

          <div className="right text" sx={{ textAlign: "center", p: "20px 0" }}>
            <div sx={{ textTransform: "uppercase", fontSize: [20, 24] }}>
              <div>I cover all your hidden dragons in my new book</div>
              <div sx={{ my: [25, 25], mb: [25, 30], fontSize: [20, 27] }}>
                <div sx={{ fontSize: [20, 40] }}>
                  <strong>
                    Your brain is <span sx={{ color: "orange" }}>Always</span>
                    Listening
                  </strong>
                </div>
                <div>Tame The hidden dragons that control</div>
                <div>Your happiness, Habits, and hangs-ups</div>
              </div>
            </div>
            <Flex sx={{ justifyContent: "center" }}>
              <a
                href=""
                sx={{
                  textTransform: "uppercase",
                  bg: "green",
                  color: "#fff",
                  p: 15,
                  mb: 20,
                  fontSize: [20, 24],
                }}
              >
                Pre order the book
              </a>
            </Flex>
            <p sx={{ fontSize: [16, 20], mb: 0 }}>
              By ordering the book now you will receive 4 free gifts.
            </p>
            <a href="" sx={{ borderBottom: "1px solid", fontWeight: "normal" }}>
              Click here to learn more
            </a>
          </div>
        </Flex>
      </Container>
    </div>
  )
}
