import { config } from "../config/config"
import { api } from "./api"

export const artistList = async () => {
 const response = await api(config?.artist, {}, "get")
 return response
}
export const artistById = async (id: string) => {
 const response = await api(`${config?.artist}/${id}`, {}, "get")
 return response
}
export const search = async (q = "", type = "", market = "IN") => {
 const response = await api(
  `${config?.search}?q=${q}&type=${type}&market=${market}`,
  {},
  "get"
 )
 return response
}
