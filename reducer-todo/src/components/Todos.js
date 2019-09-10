import React, { useState, useReducer } from "react";
import { initialState, myReducer } from "../reducers/myReducer";
import './Todos.css';
const Todos = () => {
  const [newTodo, setNewTodo] = useState('');
  const [state, dispatch] = useReducer(myReducer, initialState);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };
  console.log('State:',state.todos);
  console.log('newTodo:',newTodo);
  return (
    <div>
  
        <h1>
          {state.todos.map(todo => 
              <div className = {todo.completed ? "completed" : ""} onClick={() => dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id })}> {todo.item} </div>
          )}{" "}
          {/* <i
            className="far fa-edit"
            onClick={() => dispatch({ type: "TOGGLE_COMPLETED" })}
          /> */}
        </h1>

        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTodo}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "ADD_TODO", payload: newTodo });
              setNewTodo("");
            }}
          >
            Add Todo
          </button>

          <button
            onClick={() => {
              dispatch({ type: "CLR_COMPLETED" });
              setNewTodo("");
            }}
          >
            Clear Completed
          </button>
        </div>

    </div>
  );
};

export default Todos;
