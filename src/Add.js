import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Add(){
    const[inputData,setInputData]=useState({Supportuser:'' ,module:'',username:'',
        emailid:'',callid:'',mobilenumber:'',formname:''

    })
    const navigat=useNavigate();



    function handleSubmit(event){
        event.preventDefault()

        axios.post('http://localhost:3000/',inputData)
        .then(res=>{
            alert('Data added successfully');
            navigat('/');
        }).catch(err=> console.log(err));
    }
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='Supportuser'>Supportuser</label>
                    <input type='text'  name='Supportuser' className="form-control"
                    onChange={e=>setInputData({...inputData,Supportuser: e.target.value})}/>
                    
                    </div>
                    <div>
                    <label htmlFor='module'>module</label>
                    <input type='text'  name='module' className="form-control"
                    onChange={e=>setInputData({...inputData,module: e.target.value})}/>
                    </div>
                    <div>
                    <label htmlFor='username'>username</label>
                    <input type='text'  name='username' className="form-control"
                    onChange={e=>setInputData({...inputData,username: e.target.value})}/>
                    </div>
                    <div>
                    <label htmlFor='emailid'>emailid</label>
                    <input type='text'  name='emailid' className="form-control"
                    onChange={e=>setInputData({...inputData,emailid: e.target.value})}/>
                    </div>
                    <div>
                    <label htmlFor='callid'>callid</label>
                    <input type='text'  name='callid' className="form-control"
                    onChange={e=>setInputData({...inputData,callid: e.target.value})}/>
                    </div>
                    <div>
                    <label htmlFor='mobilenumber'>mobilenumber</label>
                    <input type='text'  name='mobilenumber' className="form-control"
                    onChange={e=>setInputData({...inputData,mobilenumber: e.target.value})}/>
                    </div>
                    <div>
                    <label htmlFor='formname'>formname</label>
                    <input type='text'  name='formname' className="form-control"
                    onChange={e=>setInputData({...inputData,formname: e.target.value})}/>
                    </div><br />
                    <button className="btn btn-info">Submit</button>
                    </form>
                

                </div>

        </div>
    )
}

export default Add