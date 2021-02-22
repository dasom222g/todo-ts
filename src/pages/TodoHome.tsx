import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export interface prams {
  id: number,
  title: string,
  desc: string,
  isComplete: boolean
}

type TodoHomeProps = {
  todoListPass: prams[],
  selectedTodoFinal: (id: number) => void
  addTodoFinal: (title: string) => void,
  completeTodoFinal: (id: number) => void
  removeTodoFinal: (id: number) => void
}

function TodoHome({todoListPass, selectedTodoFinal, addTodoFinal, completeTodoFinal, removeTodoFinal}: TodoHomeProps) {
  // 로직 부분
  const selectedTodo = (id: number) => selectedTodoFinal(id) // 값 넘겨주기

  const addTodo = (title: string) => addTodoFinal(title) // 값 넘겨주기

  const completeTodo = (id: number) => completeTodoFinal(id) // 값 넘겨주기

  const removeTodo = (id: number) => removeTodoFinal(id) // 값 넘겨주기
  // 화면 부분
  return (
    <>
      <header>
        <h2 className="todo__title">What’s the Plan for Today?</h2>
      </header>
      <TodoForm addTodo={addTodo} />
      <TodoList todoList={todoListPass} completeTodo={completeTodo} removeTodo={removeTodo} selectedTodo={selectedTodo} />
    </>
  )
}

export default TodoHome