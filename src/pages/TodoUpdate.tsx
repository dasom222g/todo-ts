import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoNoteForm from '../components/TodoNoteForm';

export interface prams {
  id: number,
  title: string,
  desc: string,
  isComplete: boolean
}

type TodoUpdateProps = {
  selectedItemPass: prams
}

function TodoUpdate({selectedItemPass}: TodoUpdateProps) {
  // 로직 부분
  // 화면 부분
  return (
    <div>
      <header>
        <h2 className="todo__title">What’s the Plan for Today?</h2>
      </header>
      <TodoForm selectedItem={selectedItemPass} />
      <TodoNoteForm />
    </div>
  )
}

TodoUpdate.defaultProps = {
  selectedItemPass: null,
}

export default TodoUpdate