import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './signinform.scss'
import { useDispatch, useSelector } from 'react-redux'
import { URL_LOGIN, URL_PROFILE } from '../../services/UserData'
import {
  changeFirstName,
  userLogin,
  changeLastName,
  errorLogin,
} from '../../redux/redux'
import { useNavigate } from 'react-router-dom'

const userLogo = (
  <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
)

function SignInForm() {
  const selector = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userName = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    console.log(userName, password, localStorage)

    const userPostLogin = async () => {
      try {
        const response = await fetch(URL_LOGIN, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: userName,
            password: password,
          }),
        })
        const data = await response.json()
        if (response.ok) {
          dispatch(userLogin(data.body.token))
        }
      } catch (error) {
        dispatch(errorLogin())

        console.log(error, selector)
      }
    }
    // userPostLogin()

    const retrieveProfile = async () => {
      try {
        await userPostLogin()
        const response = await fetch(URL_PROFILE, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${selector.token}`,
          },
        })
        const data = await response.json()

        dispatch(changeFirstName(data.body.firstName))
        dispatch(changeLastName(data.body.lastName))
        console.log('=== data profile ===', data)
        console.log('=== state ===', selector)
        navigate('/user')
      } catch (error) {
        // enter your logic for when there is an error (ex. error toast)

        console.log('could not retrieve data', error)
      }
    }

    retrieveProfile()
  }

  return (
    <section className="sign-in-content">
      {userLogo}
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </form>
    </section>
  )
}

export default SignInForm
