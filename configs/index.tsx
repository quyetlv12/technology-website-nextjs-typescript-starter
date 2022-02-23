import moment from "moment"
import { TimeInterface } from "../interfaces/utility"
import { BsNewspaper } from "react-icons/bs";
export const API_POSTS = '/posts'
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