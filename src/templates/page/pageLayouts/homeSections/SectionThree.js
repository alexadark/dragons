/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import { Link } from "gatsby"
import paperDragon from "../images/paper-dragon.png"

export const SectionThree = ({ sectionThree, allDragons }) => {
  const { dragons } = allDragons
  const { sectionThreeTitle, sectionThreeSubtitle } = sectionThree
  return (
    <div
      className="sectionThree"
      sx={{
        textAlign: "center",
      }}
    >
      <Container
        sx={{
          maxWidth: 1290,
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
        <Flex sx={{ justifyContent: "center" }}>
          <Link
            to="/quizz"
            sx={{
              p: "12px 40px",
              border: "2px solid",
              borderColor: "grey",
              color: "grey",
              borderRadius: 4,
              textTransform: "uppercase",
              fontSize: "120%",
              textAlign: "center",
              mt: [40, 60, 80],
              width: ["100%", "100%", 826],
            }}
          >
            Discover your dragons now
          </Link>
        </Flex>
      </Container>
    </div>
  )
}
