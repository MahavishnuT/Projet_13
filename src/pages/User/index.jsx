import { useDispatch, useSelector } from 'react-redux'
import Account from '../../components/Account'
import './user.scss'
import { openEdit, changeFirstName, changeLastName } from '../../redux/redux'
import { URL_PROFILE } from '../../services/ApiRoutes'

function UserPage() {
  const selectorUser = useSelector((state) => state.user)
  const selectorButton = useSelector((state) => state.button)
  const dispatch = useDispatch()

  const openEditNames = () => {
    dispatch(openEdit())
  }

  const changeNames = (event) => {
    event.preventDefault()

    const firstNameInput = document.querySelector('#firstname')
    const lastNameInput = document.querySelector('#lastname')

    dispatch(changeFirstName(firstNameInput.value))
    dispatch(changeLastName(lastNameInput.value))

    openEditNames()
    updateProfile(firstNameInput.value, lastNameInput.value)
    console.log('selectorUser in changeNames', selectorUser)
  }

  async function updateProfile(firstName, lastName) {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${selectorUser.token}`,
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
        }),
      }
      const response = await fetch(URL_PROFILE, requestOptions)
      const data = await response.json()
      console.log(data)
      console.log('selectorUser in PUT', selectorUser)
    } catch (error) {
      console.log('error PUT', error)
    }
  }

  return (
    <div className="bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {selectorUser.firstName} {selectorUser.lastName}!
        </h1>
        {!selectorButton.isOpen ? (
          <button className="edit-button" onClick={() => openEditNames()}>
            Edit Name
          </button>
        ) : (
          <form onSubmit={changeNames}>
            <div className="inputs-container">
              <div className="input-wrapper">
                <label htmlFor="firstname"></label>
                <input type="text" id="firstname" placeholder="Firstname" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastname"></label>
                <input type="text" id="lastname" placeholder="Lastname" />
              </div>
            </div>
            <div className="buttons-wrapper">
              <button className="save-button" type="submit">
                Save
              </button>
              <button className="cancel-button" onClick={() => openEditNames()}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        balance="Available"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        balance="Available"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        balance="Current"
      />
    </div>
  )
}

export default UserPage
