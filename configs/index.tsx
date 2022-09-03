import moment from "moment"
import { TimeInterface } from "../interfaces/utility"
import { BsNewspaper } from "react-icons/bs";
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from 'react-redux';

import type {
    AppDispatch,
    RootState,
} from '../redux/store';
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
export const API_SCHEDULE = '/schedules'
export const API_COURSES = '/courses'
export const API_COMMENT = '/comments'
export const GREEN_COLOR = `[#4cb050]`
export const ORANGE_COLOR = `[#ff9624]`
export const BLUE_COLOR = `[#00c2ef]`
export const API_REGISTER_COURSE ='/register-the-courses'
export const VIE = 'VIE'
export const ENG = 'ENG'
export const BASE_API_URL = 'https://vls-api.herokuapp.com'
export const NAV_WEBSITE = [
    {
        title: "Trang chủ",
        link: "/",
        id: 1,
    },
    {
        title: "Tin tức",
        link: "/news",
        id: 2,

    },
    {
        title: "Về chúng tôi",
        link: "/about",
        id: 3
    },
    {
        title: "Liên hệ",
        link: "/contact",
        id: 4
    }
]
export const convertISOstringToDate = (date: TimeInterface) => {
    return moment(date).format("DD/MMM/YYYY")
}


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const convertStringToCurreny = (string:String) => {
   return  string.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}
export const scheduleVieHeaderList = ["Tên khoá học" , "Ngày bắt đầu" , "Lịch học" , "Học phí" , "Giảng viên"]
export const scheduleEngHeaderList =  ["Course name" , "Start date" , "Schedule study" , "Tuition fee" , "Teacher"]
export const checkTypeReturnLink = (type:any) =>{
    return type === 'vietnamese' ? '/vietnamese-lesson' : type === 'english' ? '/english-lesson' : type === 'talk' ? '/coffee-talk' : "/"
}
export const _LIMIT_START_DOC = 9
export const _LIMIT_START_DOC_SCHEDULE = 5