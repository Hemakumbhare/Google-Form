import axios from "axios";

const url = "http://localhost:3003/users";

export const getUsers =async()=>{
    return await axios.get(url);
}