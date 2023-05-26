import { Link } from 'react-router-dom'
import bankLogo from '../../assets/argentBankLogo.png'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./banner.scss"

const userLogo = <FontAwesomeIcon icon={faUserCircle} />

function Banner({ sign, profile }) {
  return (
    <header>
      <Link to="/" className="banner-logo">
        <img src={bankLogo} alt="logo Argent Bank" />
      </Link>
      <Link to="/signIn" className="banner-signin">
        {userLogo}
        <h3>Sign In</h3>
      </Link>
    </header>
  )
}

export default Banner
