/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

export const ImageFluid = ({ img, ...props }) =>
  img?.localFile?.childImageSharp ? (
    <Img
      fluid={img.localFile.childImageSharp.fluid}
      alt={img.altText}
      {...props}
    />
  ) : (
    <img src={img.localFile.publicURL} alt={img.altText} />
  )

export const ImageFixed = ({ img, ...props }) =>
  img?.localFile?.childImageSharp ? (
    <Img
      fixed={img.localFile.childImageSharp.fixed}
      alt={img.altText}
      {...props}
    />
  ) : (
    <img src={img.localFile.publicURL} alt={img.altText} />
  )
