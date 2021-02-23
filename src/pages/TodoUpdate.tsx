import React from 'react';
import TodoUpdateForm from '../components/TodoUpdateForm';

export interface params { // object 초기값 세팅
  id: number,
  title: string,
  desc: string,
  isComplete: boolean
}

type TodoUpdateProps = {
  selectedItemPass: params,
  updateTodoFinal: (updateItem: params) => void
}

function TodoUpdate({selectedItemPass, updateTodoFinal}: TodoUpdateProps) {
  // 로직 부분
  const updateTodo = (updateItem: params) => updateTodoFinal(updateItem) // 값 넘겨주기
  // 화면 부분
  return (
    <>
    {selectedItemPass.title ? (
      <>
        <header>
          <h2 className="todo__title">What’s the Plan for Today?</h2>
        </header>
        <TodoUpdateForm selectedItem={selectedItemPass} updateTodo={updateTodo} />
      </>
      ) : (<div>선택된 값이 없습니다</div>)
    }
    </>
  )
}


export default TodoUpdate