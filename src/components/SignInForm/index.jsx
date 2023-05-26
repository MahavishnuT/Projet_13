import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import "./signinform.scss"
import { Link } from "react-router-dom"

const userLogo = <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />

function SignInForm() {
  return (
    <section className="sign-in-content">
      {userLogo}
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button"><Link to="/user">Sign In</Link></button>
      </form>
    </section>
  )
}

export default SignInForm
