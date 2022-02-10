import moment from "moment"
import { TimeInterface } from "../interfaces/utility"

export const API_POSTS = '/posts'
export const NAV_WEBSITE = [
    {
        title : "Trang chủ",
        link : "/",
    },
    {
        title : "Tin tức",
        link : "/news",
    },
    {
        title : "Danh mục",
        link : "/categories",
    },
    {
        title : "Liên hệ",
        link : "/contact",
    }
]
export const convertISOstringToDate = (date: TimeInterface) => {
    return moment(date).format("DD/MMM/YYYY")
}