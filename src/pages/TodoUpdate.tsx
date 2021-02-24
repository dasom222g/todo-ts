import React, { useCallback } from 'react';
import TodoUpdateForm from '../components/TodoUpdateForm';

export interface params { // object 초기값 세팅
  id: number,
  title: string,
  desc: string,
  isComplete: boolean
}

type TodoUpdateProps = {
  selectedItemPass: params | null,
  updateTodoFinal: (updateItem: params) => void
}

const TodoUpdate = React.memo(function TodoUpdate({selectedItemPass, updateTodoFinal}: TodoUpdateProps) {
  // 로직 부분
  const updateTodo = useCallback((updateItem: params) => updateTodoFinal(updateItem), [updateTodoFinal]) // 값 넘겨주기
  // 화면 부분
  console.log('TodoUpdate render')
  return (
    <>
    {selectedItemPass ? (
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
})


export default React.memo(TodoUpdate)