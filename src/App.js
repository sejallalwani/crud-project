import axios from'axios';
import React, {useEffect,useState} from'react';
import { BrowserRouter, Link, useNavigate  } from 'react-router-dom';                                                                        
    
   function App(){
    const[columns,setColumns]=useState([]);
    const[records,setRecords]=useState([]);
    const navigate=useNavigate()

    useEffect(()=> {
      axios.get('http://localhost:3000/')
      .then(res=>{
      
         setColumns(Object.keys(res.data[0]))
         setRecords(res.data)
    })
    },[]);
   
    return(
      <BrowserRouter>
      <div className='container mt-5'>
        <div className='text-end'> </div>
        <table className='table'>
          <thead>
            <tr>
              {columns.map((c,i) =>(
              <th key={i}>{c}</th>
              ))}
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
          </tbody>
          {
            records.map((d,i)=>(
              <tr key={i}>
                <td>{d.Supportuser}</td>
                <td>{d.module}</td>
                <td>{d.username}</td>
                <td>{d.emailid}</td>
                <td>{d.callid}</td>
                <td>{d.mobilenumber}</td>
                <td>{d.formname}</td>
                <td>
                  <Link to={'/update/${d.callid}'} className='btn btn-sm btn-success'>update</Link>
                  <button onClick={e=> handleSubmit(d.callid)}className='btn btn-sm btn-danger'>delete</button>
                </td>
              </tr>
            ))
          }
        </table>
</div>
</BrowserRouter>
    );
  }
   
    function handleSubmit(callid){
      const conf=window.confirm('Do you want to delete');
      if(conf){
        axios.delete('http://localhost:3000/' +callid)
          .then(res=>{
            alert('record has deleted')
            
            
          }).catch(err=> console.log(err))
          
        
      
    }
  }

  

export default App;
