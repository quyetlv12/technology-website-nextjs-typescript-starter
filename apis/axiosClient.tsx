import axios from 'axios'
const httpClient = axios.create({
    baseURL: "https://62048554c6d8b20017dc354b.mockapi.io/",
    headers: {
      "Content-Type": "application/json",
    },
})
export default httpClient