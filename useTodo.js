import { todoReducer } from "../08-useReducer/todoReducer"
import { useEffect, useReducer } from 'react'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []; //obtiene y parsea los elementos de 'todos' del localstorage.
}

export const useTodo = () => {

  const [todos, dispatchToDo] = useReducer(todoReducer, [], init) //init se ocupa para inicializar el estado.

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log(todos) //local storage solo se graban strings.
  }, [todos])

  const handleNewTodo = (todo) => {

    const action = { //objeto que se le enviara al action de todoReducer.js
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatchToDo(action) //a traves del dispatch, se enviara el action.

  }
  const handleDeleteTodo = (id) => {

    const action = { //objeto que se le enviara al action de todoReducer.js
      type: '[TODO] Remove Todo',
      payload: id
    }

    dispatchToDo(action) //a traves del dispatch, se enviara el action.

  }
  const handleToggleTodo = (id) => {

    const action = { //objeto que se le enviara al action de todoReducer.js
      type: '[TODO] Toggle Todo',
      payload: id
    }

    dispatchToDo(action) //a traves del dispatch, se enviara el action.

  }
  const pendingCount = (id) => {



  }




  return {
    todos,
    todosCount: todos.length,
    pendingCount: todos.filter(todo => !todo.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  }
}
