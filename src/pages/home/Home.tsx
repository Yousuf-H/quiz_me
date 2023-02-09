import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
  const navigate = useNavigate()
  return (
    <>
      <div>Home page</div>
      <button type='button' onClick={() => navigate('/quiz')}>
        go to quiz
      </button>
    </>
  )
}

export default Home
