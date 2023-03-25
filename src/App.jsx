import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import Todo from './components/Todo'

function App() {

  const [todoArray, setTodoArray] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [todoBeingTyped, setTodoBeingTyped] = useState("")
  const [activeTodos, setActiveTodos] = useState([])
  const [showActive, setShowActive] = useState(false)
  const [completedTodos, setCompletedTodos] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  const mappedTodos = todoArray.map((todo)=>{
    return <Todo 
    key={todo.id}
    id={todo.id}
    value = {todo.value}
    completed = {todo.completed}
    setTodoArray = {setTodoArray}
    todoArray = {todoArray}
    />
  })

  const mappedActiveTodos = activeTodos.map((todo)=>{
    return <Todo 
    key={todo.id}
    id={todo.id}
    value = {todo.value}
    completed = {todo.completed}
    setTodoArray = {setTodoArray}
    todoArray = {todoArray}
    />
  })

  const mappedCompletedTodos = completedTodos.map((todo)=>{
    return <Todo 
    key={todo.id}
    id={todo.id}
    value = {todo.value}
    completed = {todo.completed}
    setTodoArray = {setTodoArray}
    todoArray = {todoArray}
    />
  })

  function createNewTodo(todo, e){
    e.preventDefault()
    const newTodoToAdd = {
      value : todo,
      completed: false,
      id : Date.now()
    }
    setTodoArray((prev)=>[...prev, newTodoToAdd])
    setTodoBeingTyped("")
  }

  function clearCompletedTodos(){
    const clearedTodos = todoArray.filter((todo)=> todo.completed !== true)
    setTodoArray(clearedTodos)
  }

  function showActiveTodos(){
    const activeTodosArray = todoArray.filter((todo) => todo.completed == false)
    setActiveTodos(activeTodosArray)
    setShowAll(false)
    setShowCompleted(false)
    setShowActive(true)
  }

  function showAllTodos(){
    setShowActive(false)
    setShowCompleted(false)
    setShowAll(true)
  }

  function showCompletedTodos(){
    const completedTodosArray = todoArray.filter((todo) => todo.completed !== false)
    setCompletedTodos(completedTodosArray)
    setShowAll(false)
    setShowActive(false)
    setShowCompleted(true)
  }

  return (
    <main>
      <div className="top-part">        
       <Header />
      <div 
      className="main-content">

        <form 
      onSubmit = {(e)=>createNewTodo(todoBeingTyped, e)} 
        className="input-container">
          <div className="circle"></div>

        <input 
        type="text" 
        value={todoBeingTyped}
        // onSubmit = {()=>createNewTodo(e.target.value)}
        onChange={(e)=>setTodoBeingTyped(e.target.value)}
        required
        placeholder='Create a new todo...' />
        </form>

        <div className="todo-and-other-container">
          <div className="todo-container">
            { showAll && mappedTodos}       
            { showActive && mappedActiveTodos}       
            { showCompleted && mappedCompletedTodos}
          </div>

          <div className="others-container">
            <p className= "items-left">{todoArray.length} items left</p> 

            <div className="todo-state">

              <p 
              onClick={showAllTodos}
              className={showAll == true? 'active' : ""}>All</p>

              <p
              onClick={showActiveTodos}
              className = {showActive == true? "active" : ""}
              >Active</p>

              <p
              onClick={showCompletedTodos}
              className = {showCompleted == true? "active" : ""}
              >Completed</p>
            </div>

            <p
            className='clear-completed'
            onClick={clearCompletedTodos}
            >Clear Completed</p>
          </div>
        </div>
      </div>
      </div>

      <div className="bottom-part">
      </div>

      
     
    </main>
  )
}

export default App
