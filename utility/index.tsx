import React from 'react'; 
import { useRouter } from "next/router"

const router = useRouter()
export const checkTypeWindow  = () =>{
    if (typeof window !== undefined) {
      return true        
    }else{
        return false
    }
} 
export const redirectUrl = (link:string) =>{
  router.push(link)
}