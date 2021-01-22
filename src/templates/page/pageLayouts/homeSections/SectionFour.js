/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import book from "../images/book.png"

export const SectionFour = ({ sectionFour }) => {
  const { sectionFourContent } = sectionFour
  return (
    <div className="sectionFour" sx={{ bg: "lightGrey" }}>
      <Container sx={{ maxWidth: 1200 }}>
        <div
          sx={{
            display: ["flex", "flex", "inline"],
            justifyContent: "center",
          }}
        >
          <img className="leftImage" src={book} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: sectionFourContent }}
          sx={{
            // fontSize: 30,
            fontSize: [16, 30],
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
    </div>
  )
}
