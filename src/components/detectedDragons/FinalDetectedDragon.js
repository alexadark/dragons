/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"

export const FinalDetectedDragon = ({ dragon }) => {
  const {
    title,
    featuredImage: {
      node: { sourceUrl },
    },
    dragonFields: {
      dragonorigins,
      dragonTriggers,
      dragonReactions,
      dragonIntro,
    },
  } = dragon

  return (
    <div sx={{ my: [40, 65], "&:last-of-type": { mb: 0 } }}>
      <Container sx={{ maxWidth: "l" }}>
        <h1 sx={{ textAlign: "center", fontSize: [40, 72] }}>{title}</h1>
        <Flex sx={{ justifyContent: "center" }}>
          <div>
            <img
              src={sourceUrl}
              alt={`${title}`}
              sx={{ maxWidth: 450, mt: 30, mb: 60 }}
            />
          </div>
        </Flex>
      </Container>
      <Container sx={{ maxWidth: 1200 }}>
        <p sx={{ textAlign: "center", fontSize: "20px", fontWeight: 600 }}>
          {dragonIntro}
        </p>
      </Container>
      <Flex sx={{ flexWrap: ["wrap", "wrap", "nowrap"] }}>
        <div
          sx={{
            bg: "lightGrey",
            width: "100%",
            py: 35,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: 650,

              ">div": {
                width: ["100%", "50%"],
              },
            }}
          >
            <div>
              <h3>Origins - Common When...</h3>
              <div dangerouslySetInnerHTML={{ __html: dragonorigins }} />
            </div>
            <div>
              <h3>Triggers</h3>
              <div dangerouslySetInnerHTML={{ __html: dragonTriggers }} />
            </div>
          </Container>
        </div>
        <Flex
          sx={{
            justifyContent: "flex-start",
            bg: "grey",
            color: "#fff",
            p: 35,
            width: ["100%", "100%", "50%"],
          }}
        >
          <div sx={{ maxWidth: 450 }}>
            <h2 sx={{ color: "orange" }}>Reactions</h2>
            <div>
              <div dangerouslySetInnerHTML={{ __html: dragonReactions }} />
            </div>
          </div>
        </Flex>
      </Flex>
    </div>
  )
}
