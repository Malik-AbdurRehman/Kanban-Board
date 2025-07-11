
import { useContext } from "react";
import Card from "./card";
import { Context } from "./context";

export const Container = ({color,items,title}) => {
    const {
        backlogTasks,setBacklogTasks,doingTasks,setDoingTasks,reviewTasks,setReviewTasks,doneTasks,setDoneTasks
    }=useContext(Context);

    const getsetter = {
        Backlog: [backlogTasks,setBacklogTasks],
        Doing: [doingTasks,setDoingTasks],
        Done: [doneTasks,setDoneTasks],
        Review: [reviewTasks,setReviewTasks]
    }

    const handleDrop=(e)=>{
        e.preventDefault();
        const taskId = Number(e.dataTransfer.getData("taskid"));
        const fromColumn = e.dataTransfer.getData("sourceColumn");

        if(fromColumn=== title){
            return;
        }

        const[fromTasks,setFromTasks]= getsetter[fromColumn];
        const[toTasks,setToTasks]= getsetter[title];

        const movedTask = fromTasks.find(task=> task.id === taskId)
        
        if(!movedTask) return;

        const updatedTask = {...movedTask, class: title};

        setFromTasks(fromTasks.filter(task=> task.id !== taskId))
        setToTasks([...toTasks,updatedTask])
    }
    return (    
    <>
    <div className={" m-2 rounded-md min-w-40 bg-gray-200 overflow-hidden flex-1 hover:shadow-lg duration-300"} onDragOver={(e)=>e.preventDefault()} onDrop={handleDrop}>
        <div style={{backgroundColor:color, textAlign:"center" }} className="p-3 font-bold text-gray-800">
            <h1>{title}</h1>
        </div>
        <div>
            <Card items={items}/>
        </div>
    </div>
    </>
    )
}