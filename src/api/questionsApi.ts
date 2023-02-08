import axios from 'axios'

export const fetchQuestions = async (category: string) => {
  try {
    const response = await axios.get(
      `https://the-trivia-api.com/api/questions?limit=15&categories=${trimSpaces(
        category
      )}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const trimSpaces = (str: string) => {
  return str.replace(/\s/g, '')
}

// Categories
// Society & Culture
// Science
// Film & TV
// General Knowledge
// Arts & Literature
// Food & Drink
// Music
// Sport & Leisure
// Geography
// history
