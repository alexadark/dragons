import React, { useReducer, createContext } from "react"

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {
  currentQuestions: 0,
  currentAnswers: { title: "", answers: {}, detected: false },
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
