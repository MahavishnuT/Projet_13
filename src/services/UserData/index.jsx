import axios from 'axios'


export const API_URL = 'http://localhost:3001/api/v1/user'
export const URL_LOGIN = API_URL + '/login'
export const URL_SIGNUP = API_URL + '/signup'
export const URL_PROFILE = API_URL + '/profile'



export async function userDatas() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(URL_PROFILE)
      resolve(res.data)
    } catch (error) {
      reject(error)
    }
  })
}

export const userPostLogin = async (userName, password) => {
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
    
    console.log(data)
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)

    console.log(error)
  }
}

export async function userUpDate(userFirstLastName) {
  console.log(userFirstLastName)
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.put(URL_PROFILE, userFirstLastName)

      console.log(res)

      resolve(res.data)
    } catch (error) {
      console.log('error userUpDate')
      console.log(error)
      reject(error)
    }
  })
}
