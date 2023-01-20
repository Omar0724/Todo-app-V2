import React, { useContext } from 'react'
import { useState } from 'react'
import { DataContext } from './Data';

export default function Footer() {
  const [Checkall,setCheck]=useState(false);
  const [todos,setTodos] = useContext(DataContext);

  const CheckAll=()=>{
    const newTodos=[...todos];
    newTodos.forEach(todo=>{
      todo.complete= !Checkall
  })
  setTodos(newTodos)
  setCheck(!Checkall)
}

const Delete=()=>{
  const newTodos=todos.filter(todo=>
    {
      return todo.complete===false
    })
    setTodos(newTodos)
    setCheck(false)
}
  return (
    <>
    {
      todos.length=== 0 ?<h2>Congratulations  Nothings To Do</h2>
      : <div className="row">
      <label htmlFor="all">
        <input type="checkbox" name="all" id="all" onChange={CheckAll} checked={Checkall}/>
        ALL
      </label>
      <p>You have {todos.filter(todo=>todo.complete===false).length} to do </p>
      <button id="delete" onClick={Delete}>Delete</button>
    </div>
    }
    </>
   
  )
}
