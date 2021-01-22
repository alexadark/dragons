/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui"
import bg from "../../images/bg-1.jpg"
import portrait from "../../images/results-portrait.png"

export const ResultsHeroGreen = () => {
  return (
    <div
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <Container sx={{ maxWidth: 1290 }}>
        <Flex sx={{ flexWrap: "wrap" }}>
          <div
            className="left text"
            sx={{
              fontWeight: 600,
              color: "#fff",
              width: ["100%", "66%"],
              mt: [40, 100],
              pl: 20,
            }}
          >
            <h1
              sx={{
                color: "orange",
                textTransform: "uppercase",
                fontSize: [30, 45, 60],
                fontWeight: 500,
              }}
            >
              Congratulations!
            </h1>
            <Box sx={{ fontSize: [20, 40], mb: 20 }}>
              <div>Your Dragon Quiz</div>
              <div>Results Are Ready!</div>
            </Box>
            <p sx={{ fonSize: 19 }}>
              You have identified your Dragons from the Past.
            </p>
          </div>
          <Flex
            className="right image"
            sx={{
              justifyContent: "center",
              alignItems: "flex-end",
              width: ["100%", "33%"],
            }}
          >
            <div>
              <img src={portrait} alt="" sx={{ mb: -10 }} />
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  )
}
