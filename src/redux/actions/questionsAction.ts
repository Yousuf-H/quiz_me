import { Dispatch } from 'redux'

import { fetchQuestions } from '../../api/questionsApi'

export const SET_QUESTIONS = 'SET_QUESTIONS'

export interface QuestionPayload {
  category: string
  id: string
  correctAnswer: string
  incorrectAnswers: string[]
  question: string
  tags: string[]
  type: string
  difficulty: string
  regions: string[]
  isNiche: boolean
}

// Set Questions
const setQuestions = (questions: Array<QuestionPayload>) => {
  return {
    type: SET_QUESTIONS,
    payLoad: questions
  }
}

// Get Questions
export const getQuestions = (category: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const questions = await fetchQuestions(category)
      dispatch(setQuestions(questions))
    } catch (error) {
      console.error(error)
    }
  }
}
