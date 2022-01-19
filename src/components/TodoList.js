import React from 'react'

function TodoList(props) {
    const todos1=props.todos1
    return <div>
    {
        todos1.length >0 ? todos1.map((todo,index)=>{
        return <div key={index}>
            <span style={todo.completed ?
            {
                textDecoration : 'line-through'
            }:{

            }}>{todo.task}</span>

            <button onClick={()=>{
               props. completeTodo(index)
            }}>completed</button>

            <button onClick={()=>{
               props. deleteTodo(index)
            }}>
                Delete
            </button>
        </div>
    }) : 'No todos11..'
    } 
    
    </div>
}

export default TodoList
