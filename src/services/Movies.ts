import axios from 'axios'

const apiKey = import.meta.env.VITE_IMDB_API_KEY

const apiClient = axios.create({
  baseURL: 'https://imdb-api.com/en/API/',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getInTheaters() {
    return apiClient.get(`/inTheaters/${apiKey}`).then(response => response.data)
  },
  getComingSoon() {
    return apiClient.get(`/ComingSoon/${apiKey}`).then(response => response.data)
  },
  getBoxOffice() {
    return apiClient.get(`/BoxOffice/${apiKey}`).then(response => response.data)
  },

}
