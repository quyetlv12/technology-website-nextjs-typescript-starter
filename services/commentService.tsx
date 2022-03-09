import httpClient from "../apis/axiosClient";
import { API_COMMENT } from "../configs";
import { CommentProps } from "../interfaces/comment.interface";

export const commentService = {
    loadAllComment(postId:string) {
        return httpClient.get(`${API_COMMENT}/${postId}`)
    },
    writeComment(comment:CommentProps){
        return httpClient.post(API_COMMENT, comment)
    }
}