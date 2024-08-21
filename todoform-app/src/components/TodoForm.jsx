import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import "../todoform.css"

const navigate = (link) => {
  const searchEvent = new CustomEvent('NAV_EVENT', { detail: { link: link } });
  window.dispatchEvent(searchEvent);
}

function TodoForm({ input_type = "add", todoId = "" }) {
  console.log("type:", input_type)
  // const params = useParams();
  console.log("id:", todoId)
  const [todo, setTodo] = useState({
    name: "",
    description: "",
    status: "pending",
    priority: "low",
  });

  const onSave = () => {
    try {
      if (input_type === "add") {
        const uniqueId = Date.now().toString();
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.push({ ...todo, id: uniqueId });
        localStorage.setItem("todos", JSON.stringify(todos));
        toast.success("Task added successfully");
        navigate("/");
      } else {
        const existingTods = JSON.parse(localStorage.getItem("todos")) || [];
        const newTodos = existingTods.map((item) => {
          if (item.id === todoId) {
            return todo;
          }
          return item;
        });
        localStorage.setItem("todos", JSON.stringify(newTodos));
        toast.success("Task updated successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    if (input_type === "edit") {
      const todoItem = todos.find((todo) => todo.id === todoId);
      setTodo(todoItem);
    }
  }, []);

  return (
    <div className="todo-form">
      <h1 className="form-title">
        {input_type === "add" ? "Add Task" : "Edit Task"}
      </h1>

      <div className="form">
        <div className="form-item">
          <label>Name</label>
          <input
            type="text"
            value={todo.name}
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          />
        </div>

        <div className="form-item">
          <label>Description</label>
          <textarea
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          ></textarea>
        </div>

        <div className="flex">
          <div className="form-item">
            <label>Status</label>
            <select
              value={todo.status}
              onChange={(e) => setTodo({ ...todo, status: e.target.value })}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="form-item">
            <label>Priority</label>
            <select
              value={todo.priority}
              onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div className="form-action-buttons">
          <button className="default-button" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button className="primary-button" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;