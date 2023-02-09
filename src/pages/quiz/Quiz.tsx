import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Quiz = (props: Props) => {
    const navigate = useNavigate()
  return (
    <>
      <div>Quiz page</div>
      <button type='button' onClick={() => navigate('/result')}>
        go to RESULTS PAGE
      </button>
    </>
  )
}

export default Quiz
