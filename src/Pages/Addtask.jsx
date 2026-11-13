import React,{useState} from 'react'
import { addTaskApi } from '../services/allApi'

function Addtask() {
 
  const [collecttask,setcollecttask]=useState({
    addtask:"",description:""
  })

 const addtask = async()=>{
  
  try{
    const {addtask,description}=collecttask
    if(!addtask || ! description){
      alert("fill all inputs")
    }
        const response = await addTaskApi(collecttask)
        console.log(collecttask)
        setcollecttask(response.data)
        if(response.status===200 || response.status===201){
          alert("task added successfully")
          setcollecttask({
            addtask:"",description:""
          })
        }
        else{
          alert("task added failed")
        }
  }catch(err){
    console.log(err)
  }
 }
  return (
  <>
  <div className=''>

<div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}> 
 <div className='w-75 border border-dark border-2'>
   <h3 className='text-center'>Add task</h3>

   <div className='p-4'>
    <input type="text" value={collecttask.addtask}  onChange={(e)=>{setcollecttask({...collecttask,addtask:e.target.value})}} placeholder='add task'  className='form-control mb-3'/>
    <textarea name="" id="" value={collecttask.description} onChange={(e)=>{setcollecttask({...collecttask,description:e.target.value})}} placeholder='remarks' className='form-control mb-3'></textarea>
      <div className='text-center'>
      <button className='btn btn-primary' onClick={addtask}>submit</button>
   </div>
   </div>
 
 </div>
</div>
  </div>
  </>
  )
}

export default Addtask