import React from 'react'
import { IToDo } from '../Interfaces'

interface IToDoItem{
    todos: IToDo[],
    onToggle(id: number): void,
    onDelete(id: number): void
}

const ToDoList:React.FC<IToDoItem> = ({todos, onDelete, onToggle}) => {
    if(todos.length === 0){
        return <p className='center'>У вас пока что нет никаких дел!</p>
    }

  return (
    <ul>
        {todos.map(todo => {
            const classes = ['todo mb']
            if(todo.completed){
                classes.push('completed')
            }
            return (
                <li className={classes.join(' ')} key={todo.id}>
                    <label className='label_flex'>
                        <input type="checkbox" onChange={() => onToggle(todo.id)}/>
                        <span className='fz20'>{todo.title}</span>
                        <button className="btn-floating btn-medium waves-effect waves-light red" onClick={() => onDelete(todo.id)}>
                            <i className="material-icons">delete</i>
                        </button>
                    </label>
                </li>
            )
        })}
    </ul>
  )
}

export default ToDoList