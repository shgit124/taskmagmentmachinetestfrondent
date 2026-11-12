import React from 'react'

function Addtask() {
  return (
  <>
  <div className=''>

<div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}> 
 <div className='w-75 border border-dark border-2'>
   <h3 className='text-center'>Add task</h3>

   <div className='p-4'>
    <input type="text" placeholder='add task'  className='form-control mb-3'/>
    <textarea name="" id="" placeholder='remarks' className='form-control'></textarea>
   </div>
 </div>
</div>
  </div>
  </>
  )
}

export default Addtask