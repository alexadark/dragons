import React, { useReducer, createContext } from "react"

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {
  currentQuestions: 0,
  answers: [],
  showResults: false,
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
