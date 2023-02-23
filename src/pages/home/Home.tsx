import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { getQuestions } from '../../redux/actions/questionsAction'
import SelectCategory from '../../components/categoryList/CategoryList'

import './home.styles.css'

type Props = {
  dispatch: any
}

const Home = (props: Props) => {
  const { dispatch } = props
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleSelectedChange = (value: string) => {
    console.log(value)
    if (value !== selectedCategory) {
      setSelectedCategory(value)
    }
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center justify-between gap-20 mx-5 content-center'>
        <div className='text-6xl font-mono text-gray-700 text-center py-10'>
          QUIZ ME!
        </div>

        <div className='flex flex-col items-center justify-center justify-between gap-16'>
          <div className='text-2xl font-mono text-gray-700 text-center'>
            Select a category from the options below and test your knowledge by
            answering as many of the 15 questions correctly as you can!
          </div>
          <div className='text-2xl font-mono text-gray-700 text-center'>
            <SelectCategory
              selectedCategory={selectedCategory}
              handleSelectedChange={handleSelectedChange}
            />
          </div>
          <div>
            <button
              type='button'
              disabled={!selectedCategory}
              className={
                !selectedCategory
                  ? 'text-white bg-purple-400 hover:bg-purple-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                  : 'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
              }
              onClick={async event => {
                event.preventDefault()
                await dispatch(getQuestions(selectedCategory))
                navigate('/quiz')
              }}
            >
              <span className='tooltip' title='Please select a category'></span>
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ questions }: any) => {
  return {
    questions
  }
}

export default connect(mapStateToProps)(Home)
