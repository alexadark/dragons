/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import book from "../images/book.png"

export const SectionFour = ({ sectionFour }) => {
  const { sectionFourContent } = sectionFour
  return (
    <section className="sectionFour" sx={{ bg: "lightGrey" }}>
      <Container sx={{ maxWidth: 1150 }}>
        <div
          sx={{
            display: ["flex", "flex", "inline"],
            justifyContent: "center",
          }}
        >
          <div>
            <img className="leftImage" src={book} />
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: sectionFourContent }}
          sx={{
            // fontSize: 30,
            fontSize: [16, 30],
            textRendering: "optimizeLegibility",
            textAlign: ["justify !important", "left !important"],
            ".red p": {
              color: "#ff0000",
              fontStyle: "italic",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: [20, 40],
              fontFamily: "heading",
            },
          }}
        />
      </Container>
    </section>
  )
}
