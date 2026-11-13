import React,{useState,useEffect} from 'react'
import { listTaskApi } from '../services/allApi'


function Listtask() {

  const [listtask,setlisttask]=useState([])

  const collectlistTask =async()=>{
    
    const response = await listTaskApi()

    console.log(response.data)
    setlisttask(response.data)
  }

useEffect(()=>{
  collectlistTask()
},[])
  return (

  <>

  <div className='d-flex justify-content-center align-items-center' style={{height:"100%"}}>
    <div className='w-75 '>
<div className='table-responsive'>
    <h3 className='text-center'>task list</h3>
    <table className='table table-bordered '>
     <thead className='table-danger'>
        <tr>
          
             <th>task</th>
             <th>description</th>
                 <th>Status</th>
                <th>Action</th>
        </tr>
     </thead>

     {
      listtask.map((task)=>(
 <tbody className='teable-info'>
      <tr>
 
      <td>{task.addtask}</td>
      <td>{task.description}</td>
        <td>{task.status}</td>

       <td>
        <button className='btn btn-primary'>Edit</button>
         <button className='btn btn-danger'>delete</button>
      </td>
      </tr>
     
     </tbody>
      ))
     }
    
    </table>
  </div>
    </div>

  </div>
  
  </>
  )
}

export default Listtask