import Account from '../../components/Account'
import './user.scss'

function UserPage() {
  return (
    <div className="bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
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
