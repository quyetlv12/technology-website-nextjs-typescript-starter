import axios from "axios";
import httpClient from "../apis/axiosClient";
import { API_USER } from "../configs";

export const authService = {
   loginByGoogle () {
       return axios.get('http://localhost:4000/auth/google')
   },
   getALlUser(){
       return httpClient.get(API_USER)
   },
   getInfoUser(id:string){
       return httpClient.get(`${API_USER}/${id}`)
   }
}

export default authService;