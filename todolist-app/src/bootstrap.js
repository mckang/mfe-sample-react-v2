import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';


// Mount function to start up the app
const mount = (el) => {
  const root = createRoot(el);
  root.render(  
    <App />
  );
  // ReactDOM.render(<App />, el);

};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_todo_list');

  if (devRoot) {
    const root = createRoot(devRoot);
    root.render(  
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

// We are running through container
// and we should export the mount function
export { mount };