import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'
import { StatusBar } from './components/StatusBar'
import { TodoList } from './components/TodoList'
import { useState } from 'react'
import Todo from './models/todo'

function App() {
  const [total, setTotal] = useState(0);
  const [dones, setDones] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([])

  function handleNewtodo(text: string) {
    let id = 1
  
    todos.forEach(item => {
      id += 1;
    });

    const todo = {
      id,
      text,
      done: false
    };

    setTodos([...todos, todo]);
    setTotal(total +1);
  }

  const handleTodoDone = (item: Todo) =>{
    setDones(dones +1)
  }

  const handleTodoDelete = (item: Todo) =>{
    setTodos(todos.filter(x => x.id != item.id))
  }

  return (
      <div>
        <Header />
        <Sidebar submit={handleNewtodo}/>
        <StatusBar total={total} dones={dones}/>
        <main className={styles.wrapper}>
          <TodoList list={todos} handleTodoDone={handleTodoDone} handleTodoDelete={handleTodoDelete} />
        </main>
        
      </div>
  )
}

export default App
