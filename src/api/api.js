import  axios from "@/config/httpConfig"

export function  login() {
  return axios.get("/static/login.json")
}

