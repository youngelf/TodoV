import React, {useState} from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { FormDraft } from './FormDraft';
uuidv4(); 

export const FinalTodo = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, 
      {id: uuidv4(), 
        task: todo, 
        completed: false, 
        isEditing: false
      }])
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }


  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }
  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }


  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  
  
  return (
    <div className='FinalTodo'>
        <TodoForm addTodo={addTodo} />
         {todos.map((todo, index) => 
         (todo.isEditing ? 
          (<FormDraft editTodo={editTask} task={todo} />) : 
          (<Todo key={index} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} />
          
         )))}
    </div>
  )
}