import { getHeapCodeStatistics } from "v8"
import httpClient from "../apis/axiosClient"
import { API_POSTS } from "../configs"

const PostService = {
    getPosts() {
        return httpClient.get(API_POSTS)
    },
    getPost(id:any){
        return httpClient.get(`${API_POSTS}/${id}`)
    }

}
export default PostService