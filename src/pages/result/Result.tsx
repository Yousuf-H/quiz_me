import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Result = (props: Props) => {
  const navigate = useNavigate()
  return (
    <>
      <div>Result page</div>
      <button type='button' onClick={() => navigate('/')}>
        go to Home page
      </button>
    </>
  )
}

export default Result
