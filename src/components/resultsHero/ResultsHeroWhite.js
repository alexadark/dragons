/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui"
import book from "../../images/results-book.png"

export const ResultsHeroWhite = () => {
  return (
    <div>
      <Container sx={{ maxWidth: 1290 }}>
        <Flex sx={{ justifyContent: "space-around" }}>
          <Flex
            className="left image"
            sx={{ justifyContent: "center", width: "20%" }}
          >
            <div>
              <img src={book} alt="" />
            </div>
          </Flex>

          <div className="right text" sx={{ textAlign: "center" }}>
            <div sx={{ textTransform: "uppercase" }}>
              <div>I cover all your hidden dragons in my new book</div>
              <div sx={{ my: 40 }}>
                <div>
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
                }}
              >
                Pre order the book
              </a>
            </Flex>
            <p>By ordering the book now you will receive 4 free gifts.</p>
            <a href="" sx={{ textDecoration: "underline" }}>
              Click here to learn more
            </a>
          </div>
        </Flex>
      </Container>
    </div>
  )
}
