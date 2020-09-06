const React = require("react")
const GlobalContextProvider = require("./src/context/globalContextProvider")
  .GlobalContextProvider

require("typeface-bebas-neue")
require("typeface-spartan")

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
