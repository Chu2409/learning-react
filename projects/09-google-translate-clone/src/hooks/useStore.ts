import { useReducer } from 'react'
import { type FromLanguage, type Action, type State, type Language } from '../types.d'
import { AUTO_LANGUAGE } from '../const'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

const reducer = (state: State, action: Action) => {
  const { type } = action

  if (type === 'INTERCHANGES_LANGUAGES') {
    const loading = state.fromText !== ''

    if (state.fromLanguage === AUTO_LANGUAGE) return state

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      result: '',
      loading
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    if (state.fromLanguage === action.payload) return state
    const loading = state.fromText !== ''

    return {
      ...state,
      fromLanguage: action.payload,
      result: '',
      loading
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    if (state.toLanguage === action.payload) return state
    const loading = state.fromText !== ''

    return {
      ...state,
      toLanguage: action.payload,
      result: '',
      loading
    }
  }

  if (type === 'SET_FROM_TEXT') {
    const loading = action.payload !== ''

    return {
      ...state,
      loading,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

export const useStore = () => {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => { dispatch({ type: 'INTERCHANGES_LANGUAGES' }) }
  const setFromLanguage = (payload: FromLanguage) => { dispatch({ type: 'SET_FROM_LANGUAGE', payload }) }
  const setToLanguage = (payload: Language) => { dispatch({ type: 'SET_TO_LANGUAGE', payload }) }
  const setFromText = (payload: string) => { dispatch({ type: 'SET_FROM_TEXT', payload }) }
  const setResult = (payload: string) => { dispatch({ type: 'SET_RESULT', payload }) }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
