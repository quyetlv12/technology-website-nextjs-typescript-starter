import axios from 'axios'
const httpClient = axios.create({
    baseURL: process.env.API_URL || "https://621459b289fad53b1f1139db.mockapi.io/",
    headers: {
      "Content-Type": "application/json",
    },
})
 //token for request
// httpClient.interceptors.request.use(function (config) {
//   // var {data} = UserApi.isAuthenticated()
//   // if (data) {
//   //   config.headers.Authorization = "Bearer " + data.token;
//   // }
//   // return config;
// });
export default httpClient