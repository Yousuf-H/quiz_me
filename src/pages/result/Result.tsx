import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

type Props = {}

const Result = (props: Props) => {
  const [searchParams] = useSearchParams();
  const score = searchParams.get('score');
  const navigate = useNavigate()
  return (
    <>
      <div>Result page</div>
      <p>You got {score}/15</p>
      <button type='button' onClick={() => navigate('/')}>
        go to Home page
      </button>
    </>
  )
}

export default Result
