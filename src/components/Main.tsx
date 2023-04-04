import React, {useState, useEffect} from 'react'
import Form from './Form'
import ToDoList from './ToDoList';
import { IToDo } from '../Interfaces';


const Main: React.FC = () => {
    const [todos, setTodos] = useState<IToDo[]>([]);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('todos') || '[]') as IToDo[]
        setTodos(savedData)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleToDoAdd = (title:string) => {
        const newToDo: IToDo = {
            title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newToDo, ...prev])
    }

    const toggledHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo
        }))
    }

    const deleteHandler = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

  return (
    <>
        <Form onAdd={handleToDoAdd} />
        <ToDoList todos={todos} onDelete={deleteHandler} onToggle={toggledHandler} />
    </>
  )
}

export default Main
