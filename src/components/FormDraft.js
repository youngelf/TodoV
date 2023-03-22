import React, {useState} from 'react'

export const FormDraft = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {

        e.preventDefault();

        editTodo(value, task.id);
      };


  return (
    <form onSubmit={handleSubmit} className="TodoForm">

    <input type="text" 
    value={value} 
    onChange={(e) => setValue(e.target.value)} 
    className="listinput" 
    placeholder='Edit' 
    />
  </form>
  )
}