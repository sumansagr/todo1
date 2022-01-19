

import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';



function TodoApp() {
    const [todos1,settodos1] = useState([])
    const [initialTodo, setinitialTodo] = useState({
        task:'',
        completed:false
    }) 

    const addTodo =()=>{
        const todos1Copy= [...todos1] 
        const index=todos1Copy.findIndex((todo)=>{
            return todo.task === initialTodo.task
        })
        console.log(index);
        if(index  === -1){
            todos1Copy.push(initialTodo)
            settodos1(todos1Copy)
        } else{
            console.error('Todo already exists')
        }
    }

    const handleChange=(event)=>{
        // console.log(event.target.value)
        const initialTodoCopy={...initialTodo}
        initialTodoCopy.task=event.target.value
        initialTodoCopy.completed=false;
        setinitialTodo(initialTodoCopy)
    }

    const completeTodo=(index)=>{
        console.log(index);
        if(index >= 0 && index < todos1.length){
            const todos1Copy=[...todos1]
            todos1Copy[index].completed = ! todos1Copy[index].completed
            settodos1(todos1Copy)
            // if(todos1Copy[index.completed === true]){
            //     todos1Copy[index].completed = false
            // }else {
            //     todos1Copy[index].completed = true
            // }            
        }
    }
    const deleteTodo =(index)=>{
        const todos1Copy=[...todos1]
        const filteredtodos1 = todos1Copy.filter((todo,i)=>{
            return i !==index
        })
        settodos1(filteredtodos1)
    }

    return (
        <div>
            
            <div>
            <AddTodo todos1={todos1} settodos1={settodos1}  addTodo={addTodo} initialTodo={initialTodo} setinitialTodo={setinitialTodo} handleChange={handleChange}/>
            <TodoList todos1={todos1} settodos1={settodos1}  addTodo={addTodo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
            </div>
            
        </div>
    )
}

export default TodoApp;