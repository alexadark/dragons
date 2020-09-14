import config from "../../config"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
} from "@apollo/client"
import fetch from "isomorphic-fetch"
import React from "react"

const httpLink = createHttpLink({
  uri: `${config.wordPressUrl}graphql`,
})

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(),
  fetch,
})

export const GlobalApolloProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
