import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Pomodoro from './components/Pomodoro/App'

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      <Pomodoro></Pomodoro>
    </div>
  );
}

export default App;
