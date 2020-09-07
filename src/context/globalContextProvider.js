import React, { useReducer, createContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

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

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
