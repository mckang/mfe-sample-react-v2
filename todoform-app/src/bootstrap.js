
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import './todoform.css'
import App from './App';

// Mount function to start up the app
const mount = (el, input_type, todoId = "") => {
  const root = createRoot(el);
  root.render(  
    <App input_type={input_type} todoId={todoId}/>
  );
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_todo_form');

  if (devRoot) {
    const root = createRoot(devRoot);
    root.render(  
      <BrowserRouter>
        <App input_type="add" />
      </BrowserRouter>
    );
  }
}

// We are running through container
// and we should export the mount function
export { mount };