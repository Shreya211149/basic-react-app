import { useState } from "react";
import { v4 as uuidv4} from 'uuid';
export default function TodoList(){
let [todos,setTodos]=useState([{task:"Sample Task", id:uuidv4(),isDone:false}]);
let [newTodo,setNewTodo]=useState("");
     
    let addNewTask=()=>{
     setTodos([...todos,{task:newTodo,id:uuidv4(),isDone:false}]);
     setNewTodo("");

    };
    let udateTodoValue=(event)=>{
     setNewTodo(event.target.value);
    };
    let deleteTodo=(id)=>{
       setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id));
    };
    let markAsDone=(id)=>{
      setTodos((prevTodos)=>prevTodos.map((todo)=>{
        if(todo.id=id){
          return{
            ...todo,isDone:true,
          };
        }else{
          return todo;
        }
      }
      ))
    };

     let markAllDone=()=>{
      setTodos((prevTodos)=>prevTodos.map((todo)=>{
          return{
            ...todo,isDone:true,
          };
        }
      ))
    };
        
    return(
      <div>

        <input type="text" 
        placeholder="what to do?" 
        value={newTodo} 
        onChange={udateTodoValue}/>

        <br />
        <br />
        <button onClick={addNewTask} >Add Task</button>
        <br /> <br /><br /><br />
        <hr />
        <br />

        <p style={{color:"yellow"}}><b>Your to do List:</b></p>
        
         
         <ul>
             {
                todos.map((todo)=>(
                  
                    <li key={todo.id}>
                      <span style={todo.isDone ? {textDecorationLine:"line-through"}:{ }}> {todo.task}</span>
                       &nbsp; &nbsp;&nbsp;
                      <button onClick={()=>deleteTodo(todo.id)} style={{color:"red"}}>delete</button>
                       &nbsp; &nbsp;&nbsp;
                      <button onClick={()=>markAsDone(todo.id)} style={{color:"green"}}>Mark as Done</button>
                     </li>
                     
                ))
             }
             

         </ul>
         <br /><br />
         <button onClick={markAllDone} style={{color:"green"}}>Mark All as Done</button>

      </div>
    );
} 