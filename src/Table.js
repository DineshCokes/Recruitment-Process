import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { Loan } from "./Tabulation";
import { list,fetchExact, wash} from "./Detail";
import { Page } from "./Page";
import { Update } from "./Update";
import { erase, gather } from "./Connect";
export const Table=()=>
{
    const[tmpArray,setTmpArray]=useState([])
    const[createview,setCreateView]=useState(false)
    const[readview,setReadView]=useState(false)
    const[updateview,setUpdateView]=useState(false)
    const[pos,setPos]=useState(0)
    const[obj,setObj]=useState({})
    const hello=async()=>
    {
        const t=await gather();
        //setTmpArray(list())
        setTmpArray(t.data)
    }
    const toErase=async(value)=>
    {
        const dc=await erase(value)
        alert(dc.data)
        window.location.assign("/")
    }
    useEffect(()=>
    {
        hello()
    },[])
    return(
        <>
        <div className="container mt-5">
            {(createview)?
            <>
            <Loan/>
            <button className="btn btn-outline-secondary" onClick={
                ()=>
                {
                    setCreateView(false)
                    window.location.assign("/")
                }
            }>
                <i className="bi bi-skip-backward-btn-fill"></i> Back

            </button>
            </>
            :
            (updateview)?
            <>
            <Update mention={obj}/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            setUpdateView(false)
                            window.location.assign("/")
                        }
                    }>
                        <i className="bi bi-skip-backward-btn-fill"></i> Back
                    </button>

            </>
            :
            (readview)?
            <>
            <Page who={pos}/>
            <button className="btn btn-outline-secondary" onClick={
                ()=>
                {
                    setReadView(false)
                }
            }>
                <i className="bi bi-skip-backward-btn-fill"></i> Back

            </button>
            </>
            :
            <>
            <button className="btn btn-outline-success mb-3" onClick={()=>
            {
                setCreateView(true)
            }}>
                <i className="bi bi-person-plus-fill"></i> New

            </button>
            <div className="row justify-content-center">
                <div className="table-responsive-md">
                <table className="col-lg-7 col-sm-12 col-md-10 table table-stripped p-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Cibil Score</th>
                            <th>PAN Number</th>
                            <th>Aadhar Number</th>
                            <th>Contact No</th>
                            <th>Email ID</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tmpArray.map((ele,index)=>
                        <tr>
                            <td>
                                <button className="btn btn-outline-primary" onClick={()=>
                                {
                                    setReadView(true)
                                    //setPos(index)
                                    setPos(ele.resId)
                                }}>
                                    <i class="bi bi-chat"></i>
                                </button>
                                {ele.resText}

                            </td>
                            <td>{ele.resNum}</td>
                            <td>{ele.resCibil}</td>
                            <td>{ele.resPan}</td>
                            <td>{ele.resAadhar}</td>
                            <td>{ele.resContact}</td>
                            <td>{ele.resMail}</td>
                            <td>{ele.resAdd}</td>
                            <td>
                            <button className="btn btn-outline-warning rounded-circle"
                                                onClick={()=>{
                                                    setUpdateView(true)
                                                    //setPos(index)
                                                    //const y=fetchExact(ele.resText)
                                                    setObj(ele)
                                                }}>
                                                    Edit <i className="bi bi-pencil-fill"></i>
                                                </button>

                                                </td>
                                          <td>
                                                <button className="btn btn-outline-danger rounded-circle"
                                                onClick={()=>{
                                                    //setTmpArray(wash(index))
                                                    toErase(ele.resId)
                                                }}>
                                                 

                                                    Delete <i className="bi bi-trash-fill"></i>
                                                </button>
                                            </td>

                                      </tr>

                        )

                        }

                    </tbody>

                </table>

                    

                </div>

            </div>
            </>
            }

        </div>

        </>
    )
}
