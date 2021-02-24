import './assets/style/pages.scss'
import './assets/style/todo.scss'
import React, {useCallback, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import TodoHome from './pages/TodoHome'
import TodoUpdate from './pages/TodoUpdate'

export interface params  { // object 초기값 세팅
  id: number,
  title: string,
  desc: string,
  isComplete: boolean
}

const Todo = React.memo(function Todo () {
  // 로직 부분
  const [todoList, setTodoList] = useState<params[]>([])
  const [selectedItem, setSelectedItem] = useState<params | null>(null)

  const addTodo = useCallback((title: string): void => {
    if (!title || /^\s*$/.test(title)) return
    setTodoList(prev =>
      prev.filter(item => item.title === title).length
      ? [...prev]
      : [...prev, {
        id: prev.length + 1,
        title,
        desc: '',
        isComplete: false
      }])
  }, [])

  const completeTodo = useCallback((id: number):void => {
    // const _todoList = [...todoList] // 배열 복사
    // const completeTodo = _todoList.map(item => {
    //   if (item.id === id) {
    //     return {
    //       ...item, // 배열내 객체복사
    //       isComplete: !item.isComplete
    //     }
    //   }
    //   return {...item}
    // })
    // setTodoList(completeTodo)
    setTodoList(prev => prev.map(
      item => item.id === id ? {...item, isComplete: !item.isComplete} : item
    ))

  }, [])

  const removeTodo = useCallback((id: number): void => {
    // const _todoList = [...todoList]
    // const removeArr = _todoList.filter(item => item.id !== id)
    // removeArr.map((item, index) => {
    //   item.id = index + 1
    //   return item
    // })
    // setTodoList(removeArr)
    setTodoList(prev => prev.filter(item => item.id !== id))
    setTodoList(prev => prev.map(
      (item, index) => item ? {...item, id : index + 1} : item
    ))
  }, [])

  const selectedTodo = useCallback((id: number): void => {
    const _todoList = [...todoList]
    const selectedItem = _todoList.filter(item => item.id === id)
    setSelectedItem(selectedItem[0])
  }, [todoList])

  const updateTodo = useCallback((updateItem: params): void => {
    // const _todoList = [...todoList] // 배열 복사
    // const updateList = _todoList.map(item => {
    //   if (item.id === updateItem.id) {
    //     const {title, desc} = updateItem
    //     return {
    //       ...item, //  배열내의 객체복사
    //       title: title,
    //       desc: desc
    //     }
    //     // item.title = title
    //     // item.desc = desc
    //   }
    //   return {...item}
    // })
    // console.log('객체 비교', todoList[0] === updateList[0]) //false
    const {title, desc} = updateItem
    setTodoList(prev => prev.map(
      item => item.id === updateItem.id ? {...item, title: title, desc: desc} : {...item}
    ))
    setSelectedItem(null)
  }, [])
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
            path="/update/:itemId"
            render={() =>
              <TodoUpdate
                selectedItemPass={selectedItem}
                updateTodoFinal={updateTodo}
              />
            }
          />
          <Route path="/">Not found</Route>
        </Switch>
      </div>
    </div>
  )
})

export default React.memo(Todo)
