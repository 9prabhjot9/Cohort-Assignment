import { useState } from 'react'


let GLOBAL_ID = 4
//Lets create a simple todo app that renders 3 todos

function App() {
//second part
  const [todos, setTodos,] = useState([{
    id: 1,
    title: "GYM",
    description: "Go the gym at 5PM"
  },{
    id: 2,
    title: "FOOD",
    description: "Eat food at 8PM"
  },{
    id: 3,
    title: "SLEEP",
    description: "Sleep before 12PM"
  }])

  const [title, setTtitle] = useState("")
  const [description, setDescription] = useState("")
  
//fourth part
  function addTodo(){
    setTodos([...todos, {
      id: GLOBAL_ID++,
      title: title,
      description: description
    }])
    setTtitle("")
    setDescription("")
 }
  
//third part
  return (
    <>
    <input onChange={(e) => setTtitle(e.target.value)} value={title} type="text" placeholder='Add title'  /><br />
    <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder='Add description' /><br />
    <button onClick={addTodo}>Add Todo</button>
    {todos.map((todo, index) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
  )
}

//first part
function Todo({title, description}){
  return <>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </>
}


export default App
