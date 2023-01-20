import React, { useContext } from 'react'
import Listitems from './Listitems';
import { DataContext } from './Data';       





export default function List() {

    const [todos,setTodos] = useContext(DataContext);
    const switchC=(id)=>{
      const newTodos=[...todos];
      newTodos.forEach((todo,index)=>{
        if (index===id){
          todo.complete= !todo.complete
        }
      })
      setTodos(newTodos);

    }
    const EditTodos=(editv,id)=>{
      const newTodos=[...todos];
      newTodos.forEach((todo,index)=>{
        if (index===id){
          todo.name= editv
        }
      })
      setTodos(newTodos);

    }




  return (
    <ul>    {
        todos.map((todo,index)=>(<Listitems todo={todo}key={index} 
          id={index} checkcomp={switchC} EditTodos={EditTodos}/>
        ))
    }</ul>

  )
}
