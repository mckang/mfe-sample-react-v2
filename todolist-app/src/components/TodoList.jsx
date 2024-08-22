import React from "react";
// import { useNavigate } from "react-router-dom";
import '../todolist.css'

const navigate = (link) => {
  const searchEvent = new CustomEvent('NAV_EVENT', { detail: { link: link } });
  window.dispatchEvent(searchEvent);
}

function TodoList({isSignedIn}) {
  const [todoItems, setTodoItems] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const onDelete = (id) => {
    const updatedTodos = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  console.log("isSignedIn", isSignedIn)
  return (
    <div>
      <div className="flex space-between items-center">
        <h1 className="todo-list-title">Todo List</h1>
        {
          isSignedIn === true ?
          <button onClick={() => navigate("/add")} className="primary-button">
            Add Task
          </button>
          :
          <div/>
        }
      </div>

      <div className="todo-list">
        {todoItems.map((todo, index) => (
          <div key={todo.id} className="todo-item">
            <h1 className="name">{todo.name}</h1>
            <p>{todo.description}</p>
            <div className="flex space-between  footer">
              <div className="flex">
                <div className="status-priority">
                  <label>Status</label>
                  <span>{todo.status}</span>
                </div>

                <div className="status-priority">
                  <label>Priority</label>
                  <span>{todo.priority}</span>
                </div>
              </div>
              { isSignedIn === true ?
              <div className="flex action-btns">
                <span
                  onClick={() => {
                    onDelete(todo.id);
                  }}
                >
                  Delete
                </span>
                <span onClick={() => navigate(`/edit/${todo.id}`)}>Edit</span>
              </div>
              :
              <div/>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;