/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import {
  HomeHero,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
} from "./homeSections"

export const Home = ({ data }) => {
  const {
    homeHero,
    homeSectionOne,
    homeSectionTwo,
    homeSectionThree,
    homeSectionFour,
    allDragons,
  } = data.wpPage
  console.log("dragons", allDragons)

  return (
    <>
      <HomeHero homeHero={homeHero} />
      <div
        sx={{
          section: { py: [40, 100] },
          ".leftImage": {
            display: ["inlineBlock", "inline"],
            float: ["none", "left"],
            maxWidth: ["80%", 449],
            p: [0, "25px 50px 0"],
            width: "100%",
          },
        }}
      >
        <SectionOne sectionOne={homeSectionOne} />
        <SectionTwo sectionTwo={homeSectionTwo} />
        <SectionThree sectionThree={homeSectionThree} allDragons={allDragons} />
        <SectionFour sectionFour={homeSectionFour} />
      </div>
    </>
  )
}
