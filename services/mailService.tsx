import httpClient from "../apis/axiosClient"
import { API_MAIL } from "../configs"
import { MailItf } from "../interfaces/mail.interface"
export const mailService = {
    sendEmail(email:MailItf){
        return httpClient.post(API_MAIL,email)
    }
}
