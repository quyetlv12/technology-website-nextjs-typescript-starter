import moment from 'moment';

export const checkTypeWindow  = () =>{
    if (typeof window !== 'undefined') {
      return true        
    }else{
        return false
    }
} 
export const convertIsoStringToDate = (date:string) =>{
  return moment(date).format("YYYY-MM-DD")
}
export const handleUploadImage = (image:any) =>{

}