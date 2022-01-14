import moment from "moment"

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
        link : "/category",
    },
    {
        title : "Liên hệ",
        link : "/contact",
    }
]
export const convertISOstringToDate = (date: string) => {
    return moment(date).format("DD/MMM/YYYY")
}