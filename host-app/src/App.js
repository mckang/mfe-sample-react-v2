import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from './ErrorBoundary';

import RemoteList from './components/RemoteList'
import RemoteForm from './components/RemoteForm'


import { Suspense } from "react";
import Header from "./components/Header";


function App() {

  return (
    <div className="container">
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary >
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <RemoteList />
                  </Suspense>
              </ErrorBoundary>
          }
        />
        <Route
          path="/add"
          element={
            <ErrorBoundary >
                <Suspense fallback={<h1>Loading...</h1>}>
                  <RemoteForm input_type="add"/>
                </Suspense>   
              </ErrorBoundary>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ErrorBoundary >
                <Suspense fallback={<h1>Loading...</h1>}>
                  <RemoteForm input_type="edit"/>
                </Suspense> 
              </ErrorBoundary>
          }
        />
      </Routes>
    </div>
  );
}

export default App;