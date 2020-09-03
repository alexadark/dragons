/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"
import { globalStyles } from "../../styles"
import { Grommet } from "grommet"
import { styles } from "./styles"

import { Header, Footer } from "../"

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div sx={{ ...styles }}>
      <Global styles={globalStyles} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
