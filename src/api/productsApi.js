import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";

const prefix = `${API_SERVER_HOST}/api/products`

export const postAdd = async (product) => {

    //Axios의 기본 Content-Type은 application/json 이므로 변경해준다.
    const header = { headers: { "Content-Type": "Multipart/form-data" } }

    const res = await axios.post(`${prefix}/`, product, header)

    return res.data
}

export const getList = async (pageParam) => {

    const { page, size } = pageParam

    const res = await axios.get(`${prefix}/list`, { params: { page: page, size: size } })

    return res.data
}