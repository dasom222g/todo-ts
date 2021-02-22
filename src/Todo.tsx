import './assets/style/pages.scss'
import './assets/style/todo.scss'
import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import TodoHome from './pages/TodoHome'
import TodoUpdate from './pages/TodoUpdate'

export interface prams { // object 초기값 세팅
  id: number,
  title: string,
  desc: string,
  isComplete: boolean
}

function Todo () {
  // 로직 부분
  const [todoList, setTodoList] = useState<prams[]>([])
  const [selectedItem, setSelectedItem] = useState<prams>()

  const addTodo = (title: string) => {
    const newTodoList = {
      id: todoList.length + 1,
      title,
      desc: '',
      isComplete: false
    }
    if (!title || /^\s*$/.test(title)) {
      return
    } else {
      const filterText = todoList.filter(item => item.title === newTodoList.title)
      if (filterText.length) return
    }
    setTodoList([...todoList, newTodoList])
  }

  const completeTodo = (id: number) => {
    console.log('id', id)
    const _todoList = [...todoList]
    const completeTodoList = _todoList.map(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete
      }
      return item
    })
    setTodoList(completeTodoList)
  }

  const removeTodo = (id: number) => {
    const _todoList = [...todoList]
    const removeArr = _todoList.filter(item => item.id !== id)
    removeArr.map((item, index) => {
      item.id = index + 1
      return item
    })
    console.log('removeArr', removeArr)
    setTodoList(removeArr)
  }

  const selectedTodo = (id: number) => {
    console.log('selectedTodo', id)
    const _todoList = [...todoList]
    const selectedItem = _todoList.filter(item => item.id === id)
    console.log('selectedItem', {...selectedItem})
    setSelectedItem(selectedItem[0])
  }
  // 화면 부분
  return (
    <div className="content-wrapper">
      <div className="todo">
        <Switch>
          <Route
            path="/"
            render={() =>
              <TodoHome
                todoListPass={todoList}
                selectedTodoFinal={selectedTodo}
                addTodoFinal={addTodo}
                completeTodoFinal={completeTodo}
                removeTodoFinal={removeTodo}
              />
            }
            exact
          />
          <Route
            path="/update"
            render={() =>
              <TodoUpdate
                selectedItemPass={selectedItem}
              />
            }
          />
          <Route path="/">Not found</Route>
        </Switch>
      </div>
    </div>
  )
}

export default Todo;
