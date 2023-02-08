import { SET_QUESTIONS, QuestionPayload } from '../actions/questionsAction'

interface Action {
  type: string
  payLoad: QuestionPayload[] | []
}

const reducer = (state = [], action: Action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return { ...state, ...action.payLoad }
    default:
      return state
  }
}

export default reducer
