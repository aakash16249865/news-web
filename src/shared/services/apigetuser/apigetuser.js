import axios from "axios"
import apiurl from "../apiendpoint/apiendpoint"

const apigetuser = async()=>{
    const res= await axios.get(`${apiurl()}/users`);
    return res.data;

    
}

export {apigetuser};