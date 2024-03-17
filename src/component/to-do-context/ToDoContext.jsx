import {createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const ToDoContext =createContext()

const getLocalItem = ()=>{
   const storeItem = localStorage.getItem("list");
   return storeItem? JSON.parse(localStorage.getItem("list")):[]
}


const TodoProvider = ({children})=>{
    const [activity, setActivity] = useState("");

    const [task,setTask]= useState(getLocalItem());

    const [update, setUpdate] = useState(true);

    const[edit, setedit] = useState(null);

useEffect(()=>{

    localStorage.setItem("list", JSON.stringify(task))
},[task])


    const handleremove=(id) =>{
        const confirm = window.confirm("Are you sure that you want to remove?");
        if(confirm){
            const filteritem = task.filter((item)=>(
               id != item.id
               ))
               setTask(filteritem)
        }
    };

    const handleupdate =()=>{
        if(activity=== ""){
            alert("please fill the input box");
        }
       else if(!update){
            setTask(task.map((newelem)=>{
                if(newelem.id === edit){
                    return{...newelem, title:activity}
                }
                return newelem;
            }))
            setUpdate(true);
            setActivity("");
            setedit(null);
        }
        else{
            const allActivity ={id:uuidv4(),title:activity, complete:false}
            setTask([...task,allActivity]);   
            setActivity("");                         
        }
    };

    const handleEdit=(id) =>{
        const findItem = task.find((elem)=>{
            return id === elem.id
        })
        setActivity(findItem.title); 
        setUpdate(false)
        setedit(id);
    };
    const handleAll= ()=>{
        setTask([])
    };

    const handleComplete =(id)=>{
        setTask(task.map((compItem)=>{
            if(compItem.id === id){
                return{...compItem, complete: !compItem.complete}
            }
            return compItem;
        }))
    };


    const allvalue = {activity, setActivity, task, setTask, update, setUpdate, edit, setedit, handleupdate, handleAll, handleComplete,handleEdit, handleremove};


    return(
        <ToDoContext.Provider value={allvalue}>
            {children}
        </ToDoContext.Provider>
    )
}

export  {ToDoContext, TodoProvider};
