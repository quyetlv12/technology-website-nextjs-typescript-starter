import moment from "moment"
import { TimeInterface } from "../interfaces/utility"
import { BsNewspaper } from "react-icons/bs";
export const API_POSTS = '/posts'
export const NAV_WEBSITE = [
    {
        title : "Trang chủ",
        link : "/",
        icon : <BsNewspaper/>
    },
    {
        title : "Tin tức",
        link : "/news",
    },
    {
        title : "Về chúng tôi",
        link : "/about",
    },
    {
        title : "Liên hệ",
        link : "/contact",
    }
]
export const convertISOstringToDate = (date: TimeInterface) => {
    return moment(date).format("DD/MMM/YYYY")
}