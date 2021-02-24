import React, { useCallback } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export interface params { // object 초기값 세팅
  id: number,
  title: string,
  desc: string,
  isComplete: boolean
}

type TodoHomeProps = {
  todoListPass: params[],
  selectedTodoFinal: (id: number) => void
  addTodoFinal: (title: string) => void,
  completeTodoFinal: (id: number) => void
  removeTodoFinal: (id: number) => void
}

const TodoHome = React.memo(function TodoHome({todoListPass, selectedTodoFinal, addTodoFinal, completeTodoFinal, removeTodoFinal}: TodoHomeProps) {
  // 로직 부분
  const selectedTodo = useCallback((id: number) => selectedTodoFinal(id), [selectedTodoFinal]) // 값 넘겨주기

  const addTodo = useCallback((title: string) => addTodoFinal(title), [addTodoFinal]) // 값 넘겨주기

  const completeTodo = useCallback((id: number) => completeTodoFinal(id), [completeTodoFinal]) // 값 넘겨주기

  const removeTodo = useCallback((id: number) => removeTodoFinal(id), [removeTodoFinal]) // 값 넘겨주기
  // 화면 부분
  console.log('TodoHome render')
  return (
    <>
      <header>
        <h2 className="todo__title">What’s the Plan for Today?</h2>
      </header>
      <TodoForm addTodo={addTodo} />
      <TodoList todoList={todoListPass} completeTodo={completeTodo} removeTodo={removeTodo} selectedTodo={selectedTodo} />
    </>
  )
})

export default React.memo(
  TodoHome,
  (preveProps, nextProps) => preveProps.todoListPass === nextProps.todoListPass
)