/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { styles } from "./styles"

export const Header = ({ siteTitle }) => (
  <header sx={{ ...styles }}>
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
