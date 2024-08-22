import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';


// Mount function to start up the app
const mount = (el, isSignedIn) => {
  console.log("isSignedIn:", isSignedIn)

  ReactDOM.render(<App isSignedIn={isSignedIn}/>, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_todo_list');

  if (devRoot) {
    ReactDOM.render( 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    , devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };