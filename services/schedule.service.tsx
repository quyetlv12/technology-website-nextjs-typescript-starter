import httpClient from "../apis/axiosClient"
import { API_SCHEDULE } from './../configs/index';

export const scheduleService = {
    getAllSchedules(){
        return httpClient.get(`${API_SCHEDULE}?_limit=5`)
    }
}