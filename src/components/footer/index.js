/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { styles } from "./styles"

export const Footer = () => {
  return (
    <footer sx={{ ...styles }}>
      <Container>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Container>
    </footer>
  )
}
