import React from 'react'

interface Props {
  selectedCategory: string
  handleSelectedChange: (value: string) => void
}

const quizCategories = [
  {
    id: 0,
    name: 'Categories',
    value: ''
  },
  {
    id: 1,
    name: 'Arts & Literature',
    value: 'Arts&Literature'
  },
  {
    id: 2,
    name: 'Film & TV',
    value: 'Film&TV'
  },
  {
    id: 3,
    name: 'General Knowledge',
    value: 'GeneralKnowledge'
  },
  {
    id: 4,
    name: 'Food & Drink',
    value: 'Food&Drink'
  },
  {
    id: 5,
    name: 'Geography',
    value: 'Geography'
  },
  {
    id: 6,
    name: 'History',
    value: 'History'
  },
  {
    id: 7,
    name: 'Music',
    value: 'Music'
  },
  {
    id: 8,
    name: 'Science',
    value: 'Science'
  },
  {
    id: 9,
    name: 'Society & Culture',
    value: 'Society&Culture'
  },
  {
    id: 10,
    name: 'Sport & Leisure',
    value: 'Sport&Leisure'
  }
]

const SelectCategory: React.FC<Props> = ({
  selectedCategory,
  handleSelectedChange
}) => {
  return (
    <>
      <label
        htmlFor='categories'
        className='block mb-2 text-sm font-mono text-gray-900 dark:text-white'
      >
        Select a Category
      </label>
      <select
        id='categories'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        value={selectedCategory}
        onChange={e => handleSelectedChange(e.target.value)}
      >
        {quizCategories.map(category => {
          if (category.id === 0) {
            return (
              <option key={category.id} value={category.value} disabled>
                {category.name}
              </option>
            )
          }

          return (
            <option value={category.value} key={category.id}>
              {category.name}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default SelectCategory
