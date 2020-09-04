/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { HomeHero } from "../../../components"

export const Home = ({ img }) => {
  return (
    <>
      <HomeHero img={img} />
    </>
  )
}
