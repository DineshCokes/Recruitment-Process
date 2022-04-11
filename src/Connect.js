import axios from "axios";
const link="http//localhost:8082"
export const join=async(obj)=>
{
    const hai=await axios.post(`${link}/neew`,obj)

}
