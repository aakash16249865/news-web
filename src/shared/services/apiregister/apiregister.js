import axios from "axios"
import apiurl from "../apiendpoint/apiendpoint"

const apiregister = async(data)=>{
    const res= await axios.post(`${apiurl()}/user/userregister`,data);
    return res.data;

    
}

export {apiregister};