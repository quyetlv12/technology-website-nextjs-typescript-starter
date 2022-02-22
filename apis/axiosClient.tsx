import axios from 'axios'
const httpClient = axios.create({
    baseURL: "https://621459b289fad53b1f1139db.mockapi.io/",
    headers: {
      "Content-Type": "application/json",
    },
})
export default httpClient