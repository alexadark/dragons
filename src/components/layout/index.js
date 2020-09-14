/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Global } from "@emotion/core"
import { globalStyles } from "../../styles"
import { styles } from "./styles"

export const Layout = ({ children }) => {
  return (
    <div sx={{ ...styles }}>
      <Global styles={globalStyles} />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
