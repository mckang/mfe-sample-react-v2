import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from './ErrorBoundary';

import { lazy, Suspense } from "react";
import Header from "./components/Header";

const RemoteList = lazy(() => import('./components/RemoteList'));
const RemoteForm = lazy(() => import('./components/RemoteForm'));
const RemoteAuth = lazy(() => import('./components/RemoteAuth'));


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="container">
        <Toaster position="top-center" reverseOrder={false} />
        <Header 
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}        
        />
        <ErrorBoundary >
          <Suspense fallback={<h1>Loading...</h1>}>        
            <Switch>
              <Route
                path="/add">
                  {!isSignedIn && <Redirect to="/" />}
                  <RemoteForm input_type="add" isSignedIn/>
              </Route>
              <Route
                path="/edit/:id">
                  {!isSignedIn && <Redirect to="/" />}
                  <RemoteForm input_type="edit" isSignedIn/>
              </Route>
              <Route
                path="/auth/*">
                  <RemoteAuth onSignIn={() => setIsSignedIn(true)} />
              </Route>     
              <Route
                path="/">
                  <RemoteList isSignedIn={isSignedIn}/>
              </Route>                    
            </Switch>
          </Suspense> 
        </ErrorBoundary>            
      </div>
    </BrowserRouter>

  );
}

export default App;