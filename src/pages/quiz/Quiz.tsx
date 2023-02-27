import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './quiz.styles.css'
// interface Question {
//   category: string;
//   correctAnswer: string;
//   difficulty: string;
//   id: string;
//   incorrectAnswers: string[];
//   isNiche: boolean;
//   question: string;
//   regions: string[];
//   tags: string[];
//   type: string;
// }

type Props = {
  questions: any
}

const Quiz = (props: Props) => {
  const { questions } = props
  const navigate = useNavigate()
  const [selectedOptionString, setSelectedOptionString] = useState('')
  const [error, setError] = useState(false)
  const [options, setOptions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const correct = questions[currentQuestion]?.correctAnswer

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correctAnswer,
          ...questions[currentQuestion]?.incorrectAnswers
        ])
    )
  }, [currentQuestion, questions])

  const handleShuffle = (questionOptions: any) => {
    return questionOptions && questionOptions.sort(() => Math.random() - 0.5)
  }

  const handleSelected = (option: string) => {
    if (selectedOptionString === option && selectedOptionString === correct) {
      return 'select'
    } else if (
      selectedOptionString === option &&
      selectedOptionString !== correct
    ) {
      return 'wrong'
    } else if (option === correct) {
      return 'select'
    }
  }

  const handleCheck = (option: string) => {
    setSelectedOptionString(option)

    if (option === correct) setScore(score + 1)
    console.log('score', score)
    setError(false)
  }

  const handleNext = () => {
    if (currentQuestion + 1 > 14) {
      // const confirmMessage = `Are you sure you want to see your score? You won ${score} points!`
      // const confirmed = window.confirm(confirmMessage)
      // if (confirmed) {
        navigate(`/result?score=${score}`)
    } else if (selectedOptionString) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOptionString('')
    } else {
      setError(true)
    }
  }

  return (
    <div className='border border-yellow-600'>
      <div className='border border-green-600 pl-6 p-3'>
        <h1>Category: {questions[currentQuestion]?.category}</h1>
        <span>Question: {currentQuestion + 1} / 15</span>
      </div>

      <div className='singleQuestion'>
        {error && (
          <span className='err-message'>
            Please select one of the options first!
          </span>
        )}
        <div>{questions[currentQuestion]?.question}</div>
        <div className='options'>
          {options?.map((option: string, index) => {
            return (
              <button
                key={index}
                className={`option ${
                  selectedOptionString && handleSelected(option)
                }`}
                onClick={() => handleCheck(option)}
                disabled={selectedOptionString !== ''}
              >
                {option}
              </button>
            )
          })}
        </div>
        <div className='controls'>
          <button
            className='control-btn-quit'
            onClick={event => {
              event.preventDefault()
              navigate('/')
            }}
          >
            Quit
          </button>
          <button className='control-btn-next' onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ questions }: any) => {
  return {
    questions
  }
}

export default connect(mapStateToProps)(Quiz)
