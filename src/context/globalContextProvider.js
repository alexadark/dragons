import React, { useReducer, createContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const DRAGONS_QUERY = graphql`
  query {
    wp {
      options {
        allDragonsData {
          dragons {
            ... on WpDragon {
              id
              title
              featuredImage {
                node {
                  ...dragonResultLargeImage
                }
              }
              dragonFields {
                dragonMovies
                dragonMoviesTitle
                dragonReactions
                dragonTriggers
                dragonorigins
                dragonsTaming
                dragonQuestions {
                  questions
                }
                dragonSmallDark {
                  localFile {
                    publicURL
                  }
                }
                dragonSmallWhite {
                  localFile {
                    publicURL
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const initialState = {
  currentQuestions: 0,
  answers: [],
  showResults: false,
  allDragons: [],
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_CURRENT_QUESTIONS": {
      return {
        ...state,
        currentQuestions: action.currentQuestions,
      }
    }

    case "SET_ANSWERS": {
      return {
        ...state,
        answers: action.answers,
      }
    }
    case "SET_ALL_DRAGONS": {
      return {
        ...state,
        allDragons: action.allDragons,
      }
    }

    default:
      return state
  }
}

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const data = useStaticQuery(DRAGONS_QUERY)
  const { dragons } = data.wp.options.allDragonsData
  useEffect(() => {
    dispatch({
      type: "SET_ALL_DRAGONS",
      allDragons: dragons,
    })
  }, [])
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
