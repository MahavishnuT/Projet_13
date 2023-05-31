import { useDispatch, useSelector } from 'react-redux'
import Account from '../../components/Account'
import './user.scss'
import { openEdit } from '../../redux/redux'

function UserPage() {
  const selectorUser = useSelector((state) => state.user)
  const selectorButton = useSelector((state) => state.button)
  const dispatch = useDispatch()

  const firstNameInput = document.querySelector("#firstname").value
  const lastNameInput = document.querySelector("#lastname").value

  const openEditNames = () => {
    dispatch(openEdit())
  }

  const clearInputs = () => {
    firstNameInput = ""
    lastNameInput = ""
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
          <form action="">
            <div className="inputs-container">
              <div className="input-wrapper">
                <label htmlFor="firstname"></label>
                <input type="text" id="firstname" placeholder='Firstname'/>
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastname"></label>
                <input type="text" id="lastname" placeholder='Lastname'/>
              </div>
            </div>
            <div className="buttons-wrapper">
              <button className="save-button" type="submit">
                Save
              </button>
              <button className="cancel-button" >
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
