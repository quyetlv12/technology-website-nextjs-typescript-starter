import httpClient from "../apis/axiosClient"
import { API_POSTS } from "../configs"

const PostService = {
    getPosts() {
        return httpClient.get(API_POSTS)
    }

}
export default PostService