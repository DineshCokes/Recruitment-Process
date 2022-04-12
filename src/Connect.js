import axios from "axios";
const link="http://localhost:8181/End"
export const join=async(obj)=>
{
    const hai=await axios.post(`${link}/old`,obj)
    return hai;

}
export const gather=async()=>
{
    const yet=await axios.get(`${link}/house`)
    return yet;
}
export const reachOne=async(position)=>
{
    const a=await axios.get(`${link}/getting/${position}`)
    return a;
}
export const Updateone=async(obj)=>
{
    const b=await axios.put(`${link}/update`,obj)
    return b;


}
export const erase=async(ab)=>
{
    const d=await axios.delete(`${link}/del/${ab}`)
    return d;

}