import axios from "axios";
import React from "react";
import {useState,useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";

function Edit(){
    const{callid}=useParams();
    const[data,setData]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3000/' +callid)
        .then (res=> setData(res.data))
        .catch(err=>console.log(err))
    }, []);
    function handleSubmit(event){
        event.preventDefault()
        axios.put('http://localhost:3000/',data)
        .then(res=>{
            alert('data update successfully');
            navigate('/')
        })
    }
    return(
        
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='Supportuser'>Supportuser</label>
                    <input type='text'  name='Supportuser' value={data.Supportuser} className="form-control"></input>
                    
                    
                    </div>
                    <div>
                    <label htmlFor='module'>module</label>
                    <input type='text'  name='module'value={data.module} className="form-control"></input>
                
                    </div>
                    <div>
                    <label htmlFor='username'>username</label>
                    <input type='text'  name='username' value={data.username} className="form-control"></input>
                    
                    </div>
                    <div>
                    <label htmlFor='emailid'>emailid</label>
                    <input type='text'  name='emailid'  value={data.emailid}className="form-control"></input>
                    
                    </div>
                    <div>
                    <label htmlFor='callid'>callid</label>
                    <input type='text'  disabled name='callid'value={data.callid} className="form-control'"></input>
                    </div>
                    <div>
                    <label htmlFor='mobilenumber'>mobilenumber</label>
                    <input type='text'  name='mobilenumber'value={data.mobilenumber} className="form-control"></input>
                   
                    </div>
                    <div>
                    <label htmlFor='formname'>formname</label>
                    <input type='text'  name='formname' value={data.formname} className="form-control"></input>
                    
                    </div><br />
                    <button className="btn btn-info">Submit</button>
                    </form>
                

                </div>

        </div>
    )
}
export default Edit;