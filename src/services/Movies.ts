import axios from 'axios'

// import.meta.env.VITE_IMDB_API_KEY
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
  async getInTheaters() {
    const response = await apiClient.get(`/inTheaters/${apiKey}`)
    return response.data
  },
  async getComingSoon() {
    const response = await apiClient.get(`/ComingSoon/${apiKey}`)
    return response.data
  },
  async getBoxOffice() {
    const response = await apiClient.get(`/BoxOffice/${apiKey}`)
    return response.data
  },
  async getSearchMovie(searchParam: string) {
    const response = await apiClient.get(`/SearchMovie/${apiKey}/${searchParam}`)
    return response.data
  },

}
