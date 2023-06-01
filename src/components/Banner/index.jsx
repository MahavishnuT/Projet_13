import { Link } from 'react-router-dom'
import bankLogo from '../../assets/argentBankLogo.png'
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { clearState } from '../../redux/redux'
import './banner.scss'

function Banner() {
  const userLogo = <FontAwesomeIcon icon={faUserCircle} />
  const signOutLogo = <FontAwesomeIcon icon={faRightFromBracket} />
  const selector = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(clearState())
  }

  return (
    <header>
      <Link to="/" className="banner-logo">
        <img src={bankLogo} alt="logo Argent Bank" />
      </Link>
      {!selector.isLogged ? (
        <Link to="/signIn" className="banner-signin">
          {userLogo}
          <h3>Sign In</h3>
        </Link>
      ) : (
        <div className="banner-signout">
          <Link to="/user" className="banner-profile">
            {userLogo}
            <h3>{selector.firstName}</h3>
          </Link>
          <Link to="/signIn" className="banner-signout" onClick={() => signOut()}>
            {signOutLogo}
            <h3>Sign Out</h3>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Banner
