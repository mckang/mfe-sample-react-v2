import React from 'react'
import TodoList from './components/TodoList'


const App = ({isSignedIn = false}) => {
  return (
    <div>
      <TodoList isSignedIn={isSignedIn} />
    </div>
  )
}

export default App;