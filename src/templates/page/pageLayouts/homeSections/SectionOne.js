/** @jsx jsx */
import { jsx, Container } from "theme-ui"

export const SectionOne = ({ sectionOne }) => {
  const { sectionOneTitle, sectionOneContent } = sectionOne
  return (
    <section className="sectionOne" sx={{ textAlign: "center" }}>
      <Container sx={{ maxWidth: 1200 }}>
        <h2 sx={{ fontSize: [30, 50], color: "green", mb: 70 }}>
          {sectionOneTitle}
        </h2>

        <div
          dangerouslySetInnerHTML={{ __html: sectionOneContent }}
          sx={{ p: { fontSize: [20, 30] } }}
        />
      </Container>
    </section>
  )
}
