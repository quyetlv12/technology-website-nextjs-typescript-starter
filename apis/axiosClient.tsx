import axios from 'axios'
const httpClient = axios.create({
    baseURL: "https://614604dd38339400175fc7c4.mockapi.io",
    headers: {
      "Content-Type": "application/json",
    },
})
export default httpClient