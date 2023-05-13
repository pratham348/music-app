// imports from axios
import axios from "axios"

//imports from file
import { toast } from "react-hot-toast"
import { config } from "../config/config"

export const api = async (endpoint: string, data: object, type: string) => {
 let response

 const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`
 }

 try {
  switch (type) {
   case "post":
    response = await axios.post(
     `${config.baseUrl}${endpoint}`,
     { ...data },
     {
      headers
     }
    )
    break

   case "postMultipart":
    headers["Content-Type"] = "multipart/form-data"
    response = await axios.post(`${config.baseUrl}${endpoint}`, data, {
     headers
    })
    break
   case "get":
    response = await axios.get(`${config.baseUrl}${endpoint}`, {
     headers
    })
    break
   case "put":
    response = await axios.put(`${config.baseUrl}${endpoint}`, data, {
     headers
    })
    break
   case "patch":
    response = await axios.patch(`${config.baseUrl}${endpoint}`, data, {
     headers
    })
    break
   case "delete":
    response = await axios.delete(`${config.baseUrl}${endpoint}`, {
     data,
     headers
    })
    break
   default:
    return true
  }
 } catch (error: any) {
  toast.error(error?.response?.data?.message || error?.response?.data?.error)

  return error?.response
 }

 return response
}
