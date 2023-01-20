import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'



export const DataContext=createContext();


export  function Data({children}){

    const [todos,setTodos]=useState([])

    useEffect(()=>{
      const todoStore=JSON.parse(localStorage.getItem('todoStore'))
      if (todoStore) setTodos(todoStore)
    },[])

    useEffect(()=>{
      localStorage.setItem('todoStore',JSON.stringify(todos) )
    },[todos])



  return (
    <DataContext.Provider value={[todos,setTodos]}>
        {children}
    </DataContext.Provider>
  )
}
