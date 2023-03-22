import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
   return(
        <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" 
      value={value}
      placeholder="Add task" 
      className="inputbar"
      onChange={(e) => setValue(e.target.value)}
      >
      </input>
    </form>
    );
}
