import axios from 'axios'
const httpClient = axios.create({
    baseURL:  process.env.NODE_ENV === "production" ? "https://bloggerapi1.herokuapp.com/" : "http://localhost:4000/api",
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