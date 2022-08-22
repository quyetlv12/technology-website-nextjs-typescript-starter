import httpClient from "../apis/axiosClient"
import { API_COURSES, VIE } from "../configs"
import { getCourses } from "../redux/slices/coursesSlide"
export const courseService = {
   getCourse(_start = 0 , _limit = 9){
       return httpClient.get(`${API_COURSES}?_start=
       ${_start}&_limit=${_limit}`)
   },
   getCoursesByCategory(_start = 0 , _limit = 9 , _category = VIE){
    return httpClient.get(`${API_COURSES}?_start=
    ${_start}&_limit=${_limit}&category.type=${_category}`)
   },
   getCourseByIds(id:String){
    return httpClient.get(`${API_COURSES}/${id}`)
   }
}
