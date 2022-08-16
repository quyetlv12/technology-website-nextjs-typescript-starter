import httpClient from "../apis/axiosClient"
import { API_COURSES } from "../configs"
export const courseService = {
   getCourse(){
       return httpClient.get(API_COURSES)
   }
}
