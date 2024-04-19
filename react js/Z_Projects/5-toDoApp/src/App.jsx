import NavBar from "./components/NavBar";
import React from "react";
function App() {


  const [todo , setTodo] = useState("")
  const [todos , setTodos] = useState([])

const handleEdit = ()=>{
  
}
const handleDelete = ()=>{

}
const handleAdd = ()=>{
  setTodos([...todo , {todo , isCompleted : false}])
  setTodo("")
}

const handleChange = ()=>{
  setTodo(e.target.value)
}


  return (

    <>
      <NavBar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="text-lg font-bold my-5 ">Add a todo</h2>
          <input  onChange={handleChange} value={todo}  type="text" className="w-1/2" />
          <button onClick={handleAdd}  className="bg-violet-800 hover:bg-violet-950 text-white rounded-md p-2 py-1 m-6 font-bold text-sm">
            Add
          </button>
        </div>
        <h2 className="text-xl font-bold">Hi to do app</h2>
        <div className="todos">
          {todos.map(item=>{
          })}
            
            <div className="todo flex"></div>
          <div className="flex">
            <div className="text">
              {" "}
              just a todo
              <div className="buttons">
                <button onClick={handleEdit}  className="bg-violet-800 hover:bg-violet-950 text-white rounded-md p-2 py-1  font-bold text-sm mx-1">
                  Edit
                </button>
                <button onClick={handleDelete}  className="bg-violet-800 hover:bg-violet-950 text-white rounded-md p-2 py-1  font-bold text-sm mx-1">
                  Delete
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
