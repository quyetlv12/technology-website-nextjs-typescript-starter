import { getHeapCodeStatistics } from "v8"
import httpClient from "../apis/axiosClient"
import {API_POSTS, API_REGISTER_COURSE} from "../configs"
import { PostInterface } from "../interfaces/post.interface"
import AddPost from "../pages/admin/add-post/AddPost"

const RegisterCourseService = {
   registerCourse(course:any){
       return httpClient.post(API_REGISTER_COURSE , course)
   }
}
export default RegisterCourseService