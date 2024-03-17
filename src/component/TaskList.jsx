import React, { useContext } from 'react';
import { CiSquareCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToDoContext } from './to-do-context/ToDoContext';

const TaskList = () => {

    const { task, handleComplete, handleEdit, handleremove, handleAll }= useContext(ToDoContext)

   
  return (
    <div>
        <ul>
            {
                task.map((tasklist)=>(         
            <li 
            className={`flex justify-between border-b-2 px-2 py-1 items-center ${tasklist.complete?"line-through":""}`} key={tasklist.id}>
                <div className=' flex gap-3'>
                    <span className='cursor-pointer'>
                    <CiSquareCheck size={25} onClick={()=>handleComplete(tasklist.id)}/>
                    </span>
                    <span>
                        {tasklist.title}
                    </span>
                </div>
                <div className=' flex gap-3'>
                    <span className='cursor-pointer'>
                    <FaEdit size={25} onClick={()=>handleEdit(tasklist.id)}/>
                    </span>
                    <span className='cursor-pointer' onClick={()=>handleremove(tasklist.id)}>
                    <MdDelete size={25}/>
                    </span>
                </div>
            </li>
                ))
            }
           
        </ul>
        {
            task.length>=1?
            <button className='bg-[red] text-white px-3 pu-2 rounded-md my-5 hover:bg-red-400' onClick={handleAll}>Remove All</button>:""
        }
    </div>
  )
}

export default TaskList;