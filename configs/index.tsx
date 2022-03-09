import moment from "moment"
import { TimeInterface } from "../interfaces/utility"
import { BsNewspaper } from "react-icons/bs";
export const OK = 200
export const CREATED = 201
export const BAD_REQUESR = 400
export const INTERNAL_SERVER = 500
export const API_POSTS = '/posts'
export const API_ADD_POST = '/post'
export const API_LOGIN_GOOGLE = "/auth/google"
export const API_USER = "/users"
export const API_USER_GITHUB = "/users-github"
export const API_MAIL = '/send-mail'
export const API_COMMENT = '/comments'
export const NAV_WEBSITE = [
    {
        title : "Trang chủ",
        link : "/",
        id : 1,
    },
    {
        title : "Tin tức",
        link : "/news",
        id : 2,

    },
    {
        title : "Về chúng tôi",
        link : "/about",
        id : 3
    },
    {
        title : "Liên hệ",
        link : "/contact",
        id : 4
    }
]
export const convertISOstringToDate = (date: TimeInterface) => {
    return moment(date).format("DD/MMM/YYYY")
}