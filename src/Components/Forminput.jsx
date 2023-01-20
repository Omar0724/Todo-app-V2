import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { DataContext } from './Data';       






export default function Forminput() {
  const [todos,setTodos]=useContext(DataContext);
  const [todoname,setTodon]=useState('');

  const todoInp=useRef();



  const Add=e=>{
    e.preventDefault();
    setTodos([...todos,{name: todoname,complete:false}]);
    setTodon('')
    todoInp.current.focus();
  }


    useEffect(()=>{
      todoInp.current.focus();
  
    },[])

  return (
    <form onSubmit={Add}  >
        <input type="text" name='todos' id='todos' ref={todoInp} required placeholder='What needs to be done ?'
         value={todoname} onChange={(e)=>setTodon(e.target.value)} />
        <button type='submit' >Create</button>
      </form>
  )
}
