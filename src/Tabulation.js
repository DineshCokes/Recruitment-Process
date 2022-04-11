import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {create, list} from "./Detail"
export const Loan=()=>
{
    const[person,setPerson]=useState({
        "resText":"",
        "resNum":0,
        "resCibil":0,
        "resPan":"",
        "resAadhar":0,
        "resContact":0,
        "resMail":"",
        "resAdd":""
        
        

    })
    const form=(dinesh)=>
    {
        const{name,value}=dinesh.target
        setPerson(
            (prev)=>
            {
                return{
                    ...prev,
                    [name]:value
                }            
            }
        )
    }
    const vijay=()=>
    {
        create(person)
    }
    const ajith=()=>
    {
        alert("Cancelled")
    }
    return(
        <>
        <h1 className="text-center text-uppercase">Loan Details</h1>
        <div className="container-fluid mt-5 bg-primary">
            
            <div className="row justify-content-center">
                <div className="col-lg-7 col-sm-12 col-md-10 p-3">
                    <label>Name</label>
                    <input
                    type="text"
                    name="resText"
                    value={person.resText}
                    onChange={form}
                    placeholder="Name of the Person"
                    className="form-control"
                    />
                </div>
                <div className="col-lg-7 col-sm-12 col-md-10 p-3">
                    <label>Age</label>
                    <input
                    type="number"
                    name="resNum"
                    value={person.resNum}
                    onChange={form}
                    placeholder="Enter the Age"
                    className="form-control"
                    />

                </div>
                <div className="col-lg-7 col-sm-12 col-md-10 p-3">
                    <label>Cibil Score</label>
                    <input
                    type="number"
                    name="resCibil"
                    value={person.resCibil}
                    onChange={form}
                    placeholder="Enter CIBIL Score"
                    className="form-control"
                    />

                </div>
                <div className="col-lg-7 col-sm-12 col-md-10 p-3">
                    <label>PAN Number</label>
                    <input
                    type="text"
                    name="resPan"
                    value={person.resPan}
                    onChange={form}
                    placeholder="Enter PAN No:"
                    className="form-control"
                    />

                </div>
                <div className="col-lg-7 col-sm-12 col-md-10 p-3">
                    <label>Aadhar No:</label>
                    <input
                    type="number"
                    name="resAadhar"
                    value={person.resAadhar}
                    onChange={form}
                    placeholder="Enter your Aadhar No"
                    className="form-control"
                    />

                </div>
                <div className="col-lg-7 col-sm-12 col-md-10 p-3">
                    <label>Contact No:</label>
                    <input
                    type="number"
                    name="resContact"
                    value={person.resContact}
                    onChange={form}
                    placeholder="Enter ContactNo"
                    className="form-control"
                    />

                </div>
                <div className="col-lg-7 col-sm-12 col-md-10">
                    <label>E-mail ID:</label>
                    <input
                    type="email"
                    name="resMail"
                    value={person.resMail}
                    onChange={form}
                    placeholder="Enter E-mail ID"
                    className="form-control"
                    />

                </div>
                <div className="col-lg-7 col-sm-12 col-md-10 p-3">
                    <label>Address:</label>
                   <textarea className="form-control"
                   name="resAdd"
                   value={person.resAdd}
                   onChange={form}>

                   </textarea>

                </div>
                <div className="mt-4 row justify-content-around">
                    <div className="col-lg-7 col-md-10 col-sm-12">
                    <button onClick={vijay} className="btn btn-danger">Submit

                    </button>
                    <button onClick={ajith} className="btn btn-success ms-5">Cancel</button>

                </div>
                </div>
               
                


            </div>
            

        </div>
        </>

    );
}