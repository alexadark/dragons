/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect } from "react"
import PropTypes from "prop-types"
import { Global } from "@emotion/core"
import { globalStyles } from "../../styles"
import { styles } from "./styles"
import { gsap } from "gsap"
import { SEO } from "../seo"

export const Layout = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      gsap.to([".noFouc"], { duration: 1, opacity: 1 })
    }, 100)
  }, [])
  return (
    <div className="noFouc" sx={{ ...styles, opacity: 0 }}>
      <SEO />
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
