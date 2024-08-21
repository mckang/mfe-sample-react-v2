import React from 'react'
import TodoForm from './components/todoform'

const App = ({input_type, todoId = ""}) => {
  return (
    <div>
      <TodoForm input_type={input_type} todoId={todoId}></TodoForm>
    </div>
  )
}

export default App;