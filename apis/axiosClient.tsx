import axios from 'axios'
const httpClient = axios.create({
    baseURL: 'https://vietlesson-api.herokuapp.com/api/',
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