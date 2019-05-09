import  axios from "@/config/httpConfig"

export function  login() {
  return axios.get("/static/login.json")
}
export const IndexGoods = params => {
  return axios.get(`Json/IndexGoods.php?page=${params.page}`).then(res => res).catch(res=>res);
};

