import './App.css';
import React, {useState} from 'react'
function App() {

  let [todolist,setTodoList]=useState([])
  
  let saveToDoList=(event)=>{
 
    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
      let finalDolist = [...todolist,toname]
      setTodoList(finalDolist)
    }
    else{
      alert("Todo name already added")
    }

    event.preventDefault();
  }
  let list=todolist.map((value, index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist} setTodoList={setTodoList}/>
    )
  })
  return (
    <div className="App">
      <div class = "card">
      <h1 class = "name"> ToDo List</h1>
      <form onSubmit = {saveToDoList}>
        <input type = 'text' name = 'toname'/>  <button>Save</button>
      </form>
      <div className='outerDiv'>
      <ul>
        {list}
      </ul>
      </div>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({value, indexNumber, todolist, setTodoList})
{
  let deleteRow=()=>{
    let finalData = todolist.filter((v,i)=>i!==indexNumber)
    setTodoList(finalData)
  }
  return(
        <li>{indexNumber+1} {value}<span onClick={deleteRow}>&times;</span></li>

  )
}
