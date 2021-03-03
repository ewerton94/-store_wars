import axios from 'axios'

// const baseURL = 'http://localhost:8000/'
const baseURL = 'https://ewerton94.pythonanywhere.com/'

const HTTPClient = axios.create({
  baseURL: baseURL
})

// HTTPClient.defaults.withCredentials = true
HTTPClient.defaults.xsrfCookieName = 'csrftoken'
HTTPClient.defaults.xsrfHeaderName = 'X-CSRFToken'

export {
  HTTPClient
}
