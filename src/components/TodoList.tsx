import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import {GoCheck} from 'react-icons/go'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

export interface params { // object 초기값 세팅
  id: number,
  title: string,
  desc: string,
  isComplete: boolean
}

type todoListProps = {
  todoList: params[],
  selectedTodo: (id: number) => void
  completeTodo: (id: number) => void
  removeTodo: (id: number) => void
}

function TodoList({todoList, selectedTodo, completeTodo, removeTodo}: todoListProps) {
  // 로직 부분
  const onCompleteTodo = useCallback(id => {
    completeTodo(id)
  }, [completeTodo])

  const onSelected = useCallback(id => {
    selectedTodo(id)
  }, [selectedTodo])

  const onRemoveTodo = useCallback(id => {
    removeTodo(id)
  }, [removeTodo])

  // 화면 부분
  console.log('TodoList render')
  return (
    <section>
      <ul className="todo__list">
        {todoList.length > 0 && todoList.map((item, index) => {
          return (
            <li key={index} className="todo__item">
              <div className={item.isComplete ? 'todo__content complete' : 'todo__content'}>
                <div className="todo__item-check">
                  <label>
                    <input
                      type="checkbox"
                      checked={item.isComplete ? true : false}
                      onChange={() => onCompleteTodo(item.id)}
                    />
                    <i className="todo__item-check-icon" />
                    <GoCheck className="todo__item-check-icon complete" />
                    <span className="todo__content-text">{item.title}</span>
                  </label>
                </div>
                <div className="todo__item-buttonarea">
                    <Link
                      className="todo__item-button"
                      to={`/update/${item.id}`}
                      onClick={() => onSelected(item.id)}
                      >
                      <TiEdit
                        className="todo__item-button-icon update"
                      />
                    </Link>
                    <button
                      type="button"
                      className="todo__item-button"
                      onClick={()=> onRemoveTodo(item.id)}
                    >
                      <RiCloseCircleLine
                        className="todo__item-button-icon delete"
                      />
                    </button>
                  </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default React.memo(TodoList)