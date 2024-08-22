import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import './index.css';
import './todoform.css'
import App from './App';

// Mount function to start up the app
const mount = (el, input_type, todoId = "") => {
  ReactDOM.render(<App input_type={input_type} todoId={todoId}/>, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_todo_form');

  if (devRoot) {
    ReactDOM.render( 
      <BrowserRouter>
        <App input_type="add" />
      </BrowserRouter>
    , devRoot);
  }  
}

// We are running through container
// and we should export the mount function
export { mount };