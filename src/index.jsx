import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Banner from './components/Banner'
import './main.scss'
import Footer from './components/Footer'
import SignIn from './pages/SignIn'
import UserPage from './pages/User'
import { Provider } from 'react-redux'
import { store } from './redux/redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
)
