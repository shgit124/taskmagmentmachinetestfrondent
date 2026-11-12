import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Addtask from './Pages/Addtask'
import Listtask from './Pages/Listtask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-info p-3'>
       <h3 className='text-center'>Task managment App</h3>
<nav
  className="nav justify-content-center  "
>
  <Link to={'/addtask'} className="nav-link active"  aria-current="page" >Add newtask</Link >
  <Link to={'/listTask'} className="nav-link" href="#">Task list</Link>
  <a className="nav-link " href="#"></a>
</nav>

      </div> 
   

   <Routes>
    <Route path='/addtask' element={<Addtask/>} />
    <Route path='/listTask' element={<Listtask/>} />

   </Routes>

   <div className=' p-3 bg-info'>
     <h4 className='text-center'>footer</h4>
   </div>

    </>
  )
}

export default App
