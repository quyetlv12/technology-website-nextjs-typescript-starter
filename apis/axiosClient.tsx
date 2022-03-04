import axios from 'axios'
const URL_API = process.env.PRODUCTION === 'true' ? "https://bloggerapi1.herokuapp.com/" : "http://localhost:4000/api"
const httpClient = axios.create({
    baseURL: URL_API,
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