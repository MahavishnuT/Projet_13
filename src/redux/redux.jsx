import { configureStore, createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    token: '',
    isLogged: false,
    error: false
  },
  reducers: {
    userLogin: (state, action) => {
      state.isLogged = true
      state.token = action.payload
    },
    userLogout: (state) => {
      state.token = ""
      state.isLogged = false
    },
    changeFirstName: (state, action) => {
      state.firstName = action.payload
    },
    changeLastName: (state, action) => {
      state.lastName = action.payload
    },
    errorLogin: (state) => {
      state.error = true
    }
  },
})

export const {userLogin, userLogout, changeFirstName, changeLastName, errorLogin} = userSlice.actions

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  }
})
