const React = require("react")
const GlobalContextProvider = require("./src/context/globalContextProvider")
  .GlobalContextProvider
const GlobalApolloProvider = require("./src/apollo").GlobalApolloProvider

require("typeface-bebas-neue")
require("typeface-spartan")

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalApolloProvider>
      <GlobalContextProvider>{element}</GlobalContextProvider>
    </GlobalApolloProvider>
  )
}
