import { getHeapCodeStatistics } from "v8"
import httpClient from "../apis/axiosClient"
import { API_POSTS } from "../configs"
import { PostInterface } from "../interfaces/post.interface"
import AddPost from "../pages/admin/add-post/AddPost"

const PostService = {
    getPosts() {
        return httpClient.get(API_POSTS)
    },
    getPost(id:any){
        return httpClient.get(`${API_POSTS}/${id}`)
    },
    AddPost(post:PostInterface){
        return httpClient.post(`${API_POSTS}`, post)
    }

}
export default PostService