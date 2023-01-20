import React from 'react'
import { useState } from 'react'

export default function Listitems({todo,id,checkcomp,EditTodos}) {
  const [onedit,setOnedit]=useState(false);
  const [editv,setEditv]=useState(todo.name);




  const Edit=()=>{
    setOnedit(true);
  }

  const Save=id=>{
    setOnedit(false);
    if (editv){
      EditTodos(editv,id)
    }else{
      setEditv(todo.name)
    }
  }
  if (onedit){
  return (
    <li>
      <input type="text" id='editvalue' value={editv} name='editvalue' 
      onChange={(e)=>setEditv(e.target.value.toLocaleLowerCase())}/>
   
    <button  onClick={()=>Save(id)}>Save</button>
  </li>
  )
}
else{
  return (
    <li>
    <label htmlFor={id}  className={todo.complete ? "active ":''}>
      <input type="checkbox" id={id} checked={todo.complete} onChange={()=>checkcomp(id)}/>
      {todo.name}
    </label>
    <button disabled={todo.complete} onClick={Edit}>Edit</button>
  </li>
  )

}
}
