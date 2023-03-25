import { useState } from "react"
import x from "../assets/icon-cross.svg"


function Todo({value, completed, id, setTodoArray, todoArray}) {
  const [completedStatus, setCompletedStatus] = useState(completed)
  function handleDelete(){
    const newTodoArray = todoArray.filter((todo)=> todo.id !== id)
    setTodoArray(newTodoArray)
  }

  function handleCompleted(){
    todoArray.forEach((todo)=>{
      if (todo.id == id) {
        todo.completed = !todo.completed
        setCompletedStatus((prev) => !prev)
      }
    })
  }

  return (
    <div className={completedStatus == true? "todo completed" : "todo"}>
              <div 
              onClick={handleCompleted}
              className="circle completed"></div>

            <p className='completed'>{value}</p>

            <img src={x} 
            onClick = {handleDelete}
            className="delete" alt="delete your todo" />
            </div>
  )
}

export default Todo