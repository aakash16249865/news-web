import axios from "axios"
import apiurl from "../apiendpoint/apiendpoint.js"

const apilogin = async (data) => {
        const res = await axios.post(`${apiurl()}/user/loginuser`, data);
        return res.data
    
}
export {apilogin};