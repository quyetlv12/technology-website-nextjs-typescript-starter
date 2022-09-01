import httpClient from "../apis/axiosClient"
import { API_SCHEDULE, VIE } from './../configs/index';

export const scheduleService = {
    getAllSchedules(){
        return httpClient.get(`${API_SCHEDULE}?_limit=5`)
    },
    getScheduleByCate(_start = 0 , _limit = 9 , _category = VIE){
        return httpClient.get(`${API_SCHEDULE}?_start=
        ${_start}&_limit=${_limit}&category.type=${_category}`)
    }
}