import React from 'react'
import Nav from '../Nav/Nav';

export default function Todo(porps) {
    console.log(porps);
    const { todos } = porps
    const handleOnClickDelete = (id) => {
        return porps.deleteToDo(id);
    }
    return (
        <div>
            <Nav />
            <h3>{porps.title}</h3>
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>{todo.title}
                            <span onClick={() => handleOnClickDelete(todo.id)}>X</span>
                        </li>
                    )
                })
                }
            </ul>
            <hr></hr>
        </div>
    )
}
