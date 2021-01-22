/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import drAmen from "../images/dr-amen.png"
import bg2 from "../images/bg-2.jpg"

export const SectionTwo = ({ sectionTwo }) => {
  const { sectionTwoContent } = sectionTwo
  return (
    <section
      className="sectionTwo"
      sx={{
        backgroundImage: `url(${bg2}) `,
        backgroundPosition: "center",

        backgroundSize: "cover",
      }}
    >
      <Container sx={{ maxWidth: 1050, color: "#fff" }}>
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
            p: {
              fontSize: [16, 30],
              textRendering: "optimizeLegibility",
              textAlign: ["justify !important", "left !important"],
            },
            ".yellow": { color: "orange" },
          }}
        />
      </Container>
    </section>
  )
}
