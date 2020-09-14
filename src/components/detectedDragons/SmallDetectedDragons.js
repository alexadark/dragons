/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { ImageFluid } from "../../components"

export const SmallDetectedDragons = ({ detectedDragonsData }) => {
  return (
    <div sx={{ textAlign: "center" }}>
      <h2 sx={{ fontSize: 72 }}>YOU DID IT!</h2>
      <div sx={{ fontWeight: "bold" }}>
        THE FOLLOWING DRAGONS HAVE BEEN DETECTED
        <Flex
          sx={{
            flexWrap: "wrap",
            mt: 35,
            mb: 60,
            justifyContent: "center",
          }}
        >
          {detectedDragonsData &&
            detectedDragonsData.map(dragon => {
              const { title, featuredImage } = dragon
              return (
                <div
                  sx={{
                    width: ["100%", "50%", "33.33%", "25%"],
                    p: 15,
                  }}
                >
                  <Flex
                    sx={{
                      bg: "lightGrey",
                      height: ["100%", 400],
                      justifyContent: "center",
                      alignItems: "center",
                      // p: 40,
                    }}
                  >
                    <div>
                      <ImageFluid img={featuredImage.node} sx={{ m: 20 }} />
                      <div sx={{ fontWeight: 600, mt: 30, pb: 20 }}>
                        {title}
                      </div>
                    </div>
                  </Flex>
                </div>
              )
            })}
        </Flex>
      </div>
    </div>
  )
}
