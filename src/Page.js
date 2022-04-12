import React, { useEffect,useState} from "react";
import { reachOne } from "./Connect";
import { read } from "./Detail";
export const Page=(trisha)=>
{
    const[employee,setEmployee]=useState(
        {
        "resText":"",
        "resNum":0,
        "resCibil":0,
        "resPan":"",
        "resAadhar":0,
        "resContact":0,
        "resMail":"",
        "resAdd":""
        }
    )
    useEffect(()=>
    {
        callReading()
    })
    const callReading=async()=>
    {
        //setEmployee(read(trisha.who))
        const a=await reachOne(trisha.who)
        setEmployee(a.data)
    }
    return(
        <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-sm-12 col-md-10 p-4">
                    <h1 className="card title text-center bg-info">{employee.resText}</h1>
                    <div className="card-body bg-warning">
                        <p>{employee.resNum}</p>
                        <p>{employee.resCibil}</p>
                        <p>{employee.resPan}</p>
                        <p>{employee.resAadhar}</p>
                        <p>{employee.resContact}</p>
                        <p>{employee.resMail}</p>
                        <p>{employee.resAdd}</p>

                    </div>

                </div>

            </div>

        </div>
        </>
    )
}