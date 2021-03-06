import axios from "axios";
import httpClient from "../apis/axiosClient";
import { API_USER, API_USER_GITHUB } from "../configs";
type idUser = string | undefined | string[]
export const authService = {
   loginByGoogle () {
       return axios.get(`${process.env.API_LOGIN_GOOGLE}`)
   },
   getALlUser(){
       return httpClient.get(API_USER)
   },
   getInfoUser(id:idUser){
       return httpClient.get(`${API_USER}/${id}`)
   },
   getAllUserGithub(){
    return httpClient.get(API_USER_GITHUB) 
   },
   getInfoUserGithub(id:idUser){
    return httpClient.get(`${API_USER_GITHUB}/${id}`)
},
}

export default authService;