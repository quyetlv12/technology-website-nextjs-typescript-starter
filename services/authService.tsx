import axios from "axios";
import httpClient from "../apis/axiosClient";
import { API_USER } from "../configs";

export const authService = {
   loginByGoogle () {
       return axios.get("https://bloggerapi1.herokuapp.com/auth/google")
   },
   getALlUser(){
       return httpClient.get(API_USER)
   },
   getInfoUser(id:string){
       return httpClient.get(`${API_USER}/${id}`)
   }
}

export default authService;